import { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';

const Repo = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await NextCors(req, res, {
      methods: ['GET'],
      origin: '*',
      optionsSuccessStatus: 200,
    });

    const response = await fetch(
      `https://api.github.com/users/maikeg-alves/repos`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      },
    );

    if (!response.ok) {
      const errorMessage = await response.text();
      return res.status(response.status).json({ error: errorMessage });
    }

    const data = await response.json();

    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
};

export default Repo;
