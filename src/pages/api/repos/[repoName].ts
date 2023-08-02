import { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';

const RepoID = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await NextCors(req, res, {
      methods: ['GET'],
      origin: '*',
      optionsSuccessStatus: 200,
    });

    const repo = req.query.repoName as string;

    const response = await fetch(
      `https://api.github.com/repos/maikeg-alves/${repo}`,
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

    const {
      name,
      description,
      html_url,
      language,
      created_at,
      updated_at,
      pushed_at,
      homepage,
    } = data;

    const responseData = {
      name,
      description,
      html_url,
      language,
      created_at,
      updated_at,
      pushed_at,
      homepage,
    };

    res.status(200).json([responseData]);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
};

export default RepoID;
