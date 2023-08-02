import NextCors from 'nextjs-cors';

import { NextApiRequest, NextApiResponse } from 'next';

import { CombinedProject, IProject } from '@interfaces';
import { mergeProjects, prisma, authenticate } from '@utils';

export default async function projects(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'PUT', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200,
  });

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  switch (req.method) {
    case 'GET':
      try {
        const id = req.query.id;

        const project: IProject | null = await prisma.project.findUnique({
          where: {
            id: Number(id),
          },
          include: {
            technologies: true,
          },
        });

        if (!project) {
          return res.status(404).json({
            mensager: 'projeto not find ❌',
          });
        }

        console.log('value github > ' + project.github);

        const githubRepo = await fetch(
          `${baseUrl}/api/repos/${project.github}`,
          {
            method: 'GET',
          },
        );

        const apiData = await githubRepo.json();

        const apiRepositorie = Array.isArray(apiData) ? apiData : [];

        const combinedData: CombinedProject[] = mergeProjects(apiRepositorie, [
          project,
        ]);

        res.status(200).json(combinedData);
      } catch (error) {
        res.status(505).send(`${error} error communicating with server ❌`);
      }
      break;
    case 'PUT':
      authenticate(req, res, async () => {
        try {
          const id = req.query.id;

          const {
            name,
            github,
            description_,
            difficulty,
            img,
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
              description_,
              difficulty,
              img,
              technologies: {
                set: technologys_id.map((id: number) => ({ id })),
              },
            },
          });

          //ANNOTATION: revalidando a pagina após a atualização
          await res.revalidate('/projects');

          return res.status(200).json({
            update,
            revalidated: true,
          });
        } catch (error) {
          console.error(error);
          return res
            .status(505)
            .json(`${error} error communicating with server ❌`);
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
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
