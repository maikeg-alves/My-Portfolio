import NextCors from 'nextjs-cors';
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma, generateToken } from '@utils';

export default async function recovery(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await NextCors(req, res, {
    methods: ['GET'],
    origin: '*',
    optionsSuccessStatus: 200,
  });

  try {
    const { email, code } = req.query;

    if (!email || !code) {
      return res.status(401).end('Invalid credentials');
    }

    const emailConfirmation = await prisma.emailConfirmation.findMany({
      where: { email: email as string, code: +code as number },
    });

    if (emailConfirmation.length === 0) {
      return res.status(404).end('Code not found');
    }

    const recoveryToken = generateToken({ code: +code as number });

    if (!recoveryToken) {
      return res.status(505).end('Error generating recovery token ');
    }

    res.status(200).send({
      message: 'Code successfully verified',
      code: code,
      recoveryToken: recoveryToken,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An unexpected error occurred.' });
  }
}
