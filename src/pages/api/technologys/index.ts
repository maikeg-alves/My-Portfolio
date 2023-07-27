import { prisma } from 'src/libs/prisma';

import { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';
import { authenticate } from 'src/scripts';

export default async function technologies(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'POST'],
    origin: '*',
    optionsSuccessStatus: 200,
  });

  switch (req.method) {
    case 'GET':
      try {
        const technologys = await prisma.technology.findMany({
          include: {
            projects: true,
          },
        });

        res.json(technologys);
      } catch (error) {
        res.status(505).send(`${error} error communicating with server ❌`);
      }
      break;

    case 'POST':
      authenticate(req, res, async () => {
        try {
          const { name, icon, ability } = req.body;

          if (!name || !icon || !ability) {
            return res.status(400).json({
              message: 'Missing fields',
            });
          }

          const technology = await prisma.technology.findUnique({
            where: { name },
          });

          if (technology) {
            return res.status(404).json({
              mensager: 'tecnology not find ❌',
            });
          }

          const Newtechnology = await prisma.technology.create({
            data: {
              name,
              icon,
              ability,
            },
          });

          //revalidate page
          await res.revalidate('/skills');

          return res.status(200).json({
            mensager: 'technology created successfull✅',
            Newtechnology,
            revalidated: true,
          });
        } catch (e) {
          console.error(e);
          return res.status(505).send(`${e} error when creating technology ❌`);
        }
      });

      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
