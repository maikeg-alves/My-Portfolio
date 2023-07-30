import NextCors from 'nextjs-cors';
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma, generateRandomCode, generateToken } from '@utils';

import { sendMail } from '../../sendmail';

import { RecoveryMailOptions } from '@templates';

const emailAdim = process.env.EMAIL_ADMIN;

export default async function recovery(
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

      break;

    case 'GET':
      try {
        const { email, code } = req.body;

        if (!email && !code) {
          return res.status(401).end('Invalid credentials');
        }

        const emailConfirmation = await prisma.emailConfirmation.findMany({
          where: { email: email, code: code },
        });

        if (!emailConfirmation) {
          return res.status(404).end('Code not found');
        }

        const recoveryToken = generateToken({ code });

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
      break;
    default:
      res.setHeader('Allow', ['POST', 'GET']);
      res.status(405).json('Method not allowed');
      break;
  }
}
