import NextCors from 'nextjs-cors';
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma, generateRandomCode } from '@utils';

import { sendMail } from '../../sendmail';

import { RecoveryMailOptions } from '@templates';

const emailAdim = process.env.EMAIL_ADMIN;

export default async function recovery(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await NextCors(req, res, {
    // Options
    methods: ['POST'],
    origin: '*',
    optionsSuccessStatus: 200,
  });

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(401).end('Invalid credentials');
    }

    if (email != emailAdim) {
      return res.status(401).end('Invalid credentials');
    }

    const code = generateRandomCode();

    await prisma.emailConfirmation.create({
      data: {
        email,
        code: code,
      },
    });

    await sendMail(RecoveryMailOptions(email, code));

    res
      .status(200)
      .send({ menssage: 'Recovery code successfully generated and sent' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An unexpected error occurred.' });
  }
}
