import { prisma } from 'libs/prisma';

import { NextApiRequest, NextApiResponse } from 'next';

export default async function projects(
  req: NextApiRequest,
  res: NextApiResponse,
) {
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
      const { name, icon, ability } = req.body;
      try {
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

        res.status(200).json({
          mensager: 'technology created successfull✅',
          Newtechnology,
        });
      } catch (err) {
        res.status(505).send(`${err}error when creating technology ❌`);
      }
      break;

    case 'PUT':
      try {
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

        res.status(200).json({
          mensager: 'tecnologia actualizada com sucesso ✅',
          updateTechnology,
        });
      } catch (err) {
        res.status(505).send(`${err} error communicating with server ❌`);
      }
      break;

    case 'DELETE':
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

        res.status(200).json({
          mensager: 'technology successfully deleted! ✅',
          deleteProject,
        });
      } catch (error) {
        return res
          .status(505)
          .json(`${error} error communicating with server ❌`);
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
