import { prisma } from 'src/libs/prisma';
import NextCors from 'nextjs-cors';

import { NextApiRequest, NextApiResponse } from 'next';
import { authenticate } from 'src/scripts';
import { IProject, CombinedProject } from '@interfaces';
import { mergeProjects } from '@libs';

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

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  switch (req.method) {
    case 'GET':
      try {
        const projects: IProject[] = await prisma.project.findMany({
          include: {
            technologies: true,
          },
        });

        if (!projects || projects.length === 0) {
          return res
            .status(505)
            .json({ error: 'valores não encotrados no banco de dados' });
        }

        const githubRepos = await fetch(`${baseUrl}/api/repos`, {
          method: 'GET',
        });

        const apiData = await githubRepos.json();

        const apiRepositories = Array.isArray(apiData) ? apiData : [];

        const combinedData: CombinedProject[] = mergeProjects(
          apiRepositories,
          projects,
        );

        res.status(200).json(combinedData);
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
            description_,
            difficulty,
            img,
            technologys_id,
          } = req.body;

          if (
            !name ||
            !github ||
            !description_ ||
            !difficulty ||
            !img ||
            !technologys_id
          ) {
            return res.status(400).json({
              message: 'Missing fields',
            });
          }
          // verificando se os ids das tecnologias existe

          const technologysExist = await prisma.technology.count({
            where: {
              id: {
                in: technologys_id,
              },
            },
          });

          if (technologysExist !== technologys_id.length) {
            return res.status(404).json({
              message: 'Some of the technologys does not exist',
            });
          }

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
              description_,
              difficulty,
              img,
              technologies: {
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
          console.error(error);
          return res
            .status(505)
            .send(`${error} error communicating with server ❌`);
        }
      });

      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
