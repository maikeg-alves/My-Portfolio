import { prisma, authenticate } from '@utils';

import { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';

export default async function technologies(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200,
  });

  switch (req.method) {
    case 'GET':
      try {
        const id = req.query.id;

        const technology = await prisma.technology.findUnique({
          where: {
            id: Number(id),
          },
        });

        if (!technology) {
          return res.status(404).json({
            mensager: 'technology not find ❌',
          });
        }

        res.status(200).json(technology);

        res.json(technology);
      } catch (error) {
        res.status(505).send(`${error} error communicating with server ❌`);
      }
      break;

    case 'PUT':
      authenticate(req, res, async () => {
        try {
          const id = req.query.id;
          const { name, icon, ability } = req.body;

          if (!name || !icon || !ability) {
            return res.status(400).json({
              message: 'Missing fields',
            });
          }

          const technology = await prisma.technology.findUnique({
            where: { id: Number(id) },
          });

          if (!technology) {
            return res.status(404).json({
              mensager: 'tecnologia não encontrada ❌',
            });
          }

          const updateTechnology = await prisma.technology.update({
            where: { id: Number(id) },
            data: {
              name,
              icon,
              ability,
            },
          });

          //revalidate page
          await res.revalidate('/skills');

          return res.status(200).json({
            mensager: 'tecnologia actualizada com sucesso ✅',
            updateTechnology,
            revalidated: true,
          });
        } catch (err) {
          console.error(err);
          return res
            .status(505)
            .send(`${err} error communicating with server ❌`);
        }
      });
      break;

    case 'DELETE':
      authenticate(req, res, async () => {
        try {
          const id = req.query.id;

          const technology = await prisma.technology.findMany({
            where: { id: Number(id) },
          });

          if (!technology) {
            return res.status(404).json({ error: 'id not find ❌' });
          }

          const deleteProject = await prisma.technology.delete({
            where: {
              id: Number(id),
            },
          });

          //revalidate page
          await res.revalidate('/skills');

          return res.status(200).json({
            mensager: 'technology successfully deleted! ✅',
            deleteProject,
            revalidated: true,
          });
        } catch (error) {
          return res
            .status(505)
            .json(`${error} error communicating with server ❌`);
        }
      });
      break;

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
