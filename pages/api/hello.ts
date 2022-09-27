import { IProjects } from '@interfaces';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProjects[]>,
) {
  const items = [
    {
      id: 1,
      name: 'NextUI',
      description:
        'NextUI is a React UI library that is built with Next.js and Tailwind CSS.',
      image: 'https://nextui.org/nextui.png',
      url: 'https://nextui.org',
      github: 'https://github.io/nextui-org/nextui',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      data: '02/12/2022',
    },
    {
      id: 2,
      name: 'LastUI',
      description:
        'NextUI is a React UI library that is built with Next.js and Tailwind CSS.',
      image: 'https://nextui.org/nextui.png',
      url: 'https://nextui.org',
      github: 'https://github.io/nextui-org/nextui',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      data: '02/12/2022',
    },
    {
      id: 3,
      name: 'LastUI',
      description:
        'NextUI is a React UI library that is built with Next.js and Tailwind CSS.',
      image: 'https://nextui.org/nextui.png',
      url: 'https://nextui.org',
      github: 'https://github.io/nextui-org/nextui',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      data: '02/12/2022',
    },
  ];
  res.status(200).json(items);
}
