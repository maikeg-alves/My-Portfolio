import { prisma } from 'src/libs/prisma';
import NextCors from 'nextjs-cors';

import { NextApiRequest, NextApiResponse } from 'next';
import { authenticate } from 'src/scripts';

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
          const project = await prisma.project.findUnique({
            where: {
              id: Number(id),
            },
            include: {
              technologys: true,
            },
          });

          if (!project) {
            return res.status(404).json({
              mensager: 'projeto not find ❌',
            });
          }

          res.status(200).json(project);
        }

        const project = await prisma.project.findMany({
          include: {
            technologys: true,
          },
        });

        res.json(project);
      } catch (error) {
        res.status(505).send(`${error} error communicating with server ❌`);
      }
      break;

    case 'POST':
      authenticate(req, res, async () => {
        try {
          const {
            name,
            github,
            description,
            difficulty,
            img,
            gif,
            technologys_id,
          } = req.body;

          const project = await prisma.project.findUnique({
            where: {
              name,
            },
          });

          if (project) {
            return res.status(404).json({
              mensager: 'project not find',
            });
          }

          const NewProject = await prisma.project.create({
            data: {
              name,
              github,
              description,
              difficulty,
              img,
              gif,
              technologys: {
                connect: technologys_id.map((id: number) => ({ id })),
              },
            },
          });

          //ANNOTATION: revalidando a pagina após a criação de um novo projeto
          await res.revalidate('/projects');

          return res.status(200).json({
            mensager: 'project created successfully ✅',
            NewProject,
            revalidated: true,
          });
        } catch (error) {
          res.status(505).send(`${error} error communicating with server ❌`);
        }
      });

      break;

    case 'PUT':
      authenticate(req, res, async () => {
        try {
          const id = req.query.id;

          const {
            name,
            github,
            description,
            difficulty,
            img,
            gif,
            technologys_id,
          } = req.body;

          const project = await prisma.project.findMany({
            where: { id: Number(id) },
          });

          if (!project) {
            return res.status(404).json({ mensager: 'id not found ❌' });
          }

          const update = await prisma.project.update({
            where: { id: Number(id) },
            data: {
              name,
              github,
              description,
              difficulty,
              img,
              gif,
              technologys: {
                connect: technologys_id.map((id: number) => ({ id })),
              },
            },
          });

          //ANNOTATION: revalidando a pagina após a atualização
          await res.revalidate('/projects');

          return res.status(200).json({
            mensager: 'project updated successfully ✅',
            update,
            revalidated: true,
          });
        } catch (error) {
          res.status(505).json(`${error} error communicating with server ❌`);
        }
      });
      break;

    case 'DELETE':
      authenticate(req, res, async () => {
        try {
          const id = req.query.id;

          const project = await prisma.project.findMany({
            where: { id: Number(id) },
          });

          if (!project) {
            return res.status(404).json({ error: 'id não encontrado ❌' });
          }

          const deleteProject = await prisma.project.delete({
            where: {
              id: Number(id),
            },
          });

          //ANNOTATION: revalidando a pagina após a exclusão
          await res.revalidate('/projects');

          return res.status(200).json({
            mensager: 'Project successfully deleted! ✅',
            deleteProject,
            revalidated: true,
          });
        } catch (error) {
          res.status(505).json(`${error} error communicating with server ❌`);
        }
      });

      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
