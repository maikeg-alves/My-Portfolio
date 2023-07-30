import NextCors from 'nextjs-cors';
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@utils';
import { convertPasswordToHash } from '@utils';

const emailAdim = process.env.EMAIL_ADMIN;

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await NextCors(req, res, {
    // Options
    methods: ['POST', 'GET'],
    origin: '*',
    optionsSuccessStatus: 200,
  });

  switch (req.method) {
    case 'POST':
      try {
        const { email, password } = req.body;

        if (!email || !password) {
          return res.status(401).end('Invalid credentials');
        }

        if (email != emailAdim) {
          return res.status(401).end('Invalid credentials');
        }

        await prisma.user.create({
          data: {
            email,
            password: convertPasswordToHash(password),
            isAdmin: true,
            updatedAt: new Date(),
          },
        });

        res.status(200).send({ menssage: 'user created with, success' });
      } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'An unexpected error occurred.' });
      }
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).json('Method not allowed');
      break;
  }
}
