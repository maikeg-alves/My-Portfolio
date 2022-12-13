import { prisma } from 'src/libs/prisma';

import { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';

export default async function projects(
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

        if (id) {
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
        }

        const technology = await prisma.technology.findMany();

        res.json(technology);
      } catch (error) {
        res.status(505).send(`${error} error communicating with server ❌`);
      }
      break;

    case 'POST':
      try {
        if (req.query.secret !== process.env.SECRET) {
          return res.status(401).json({ message: 'Invalid secret' });
        }

        const { name, icon, ability } = req.body;
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
      } catch (err) {
        res.status(505).send(`${err}error when creating technology ❌`);
      }
      break;

    case 'PUT':
      try {
        if (req.query.secret !== process.env.SECRET) {
          return res.status(401).json({ message: 'Invalid secret' });
        }

        const id = req.query.id;
        const { name, icon, ability } = req.body;
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
        res.status(505).send(`${err} error communicating with server ❌`);
      }
      break;

    case 'DELETE':
      try {
        if (req.query.secret !== process.env.SECRET) {
          return res.status(401).json({ message: 'Invalid secret' });
        }

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
      break;

    default:
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
