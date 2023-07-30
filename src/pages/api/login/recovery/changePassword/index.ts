import { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';
import { prisma, authenticate, convertPasswordToHash } from '@libs';

const ChagerPassword = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await NextCors(req, res, {
      methods: ['GET'],
      origin: '*',
      optionsSuccessStatus: 200,
    });
    authenticate(req, res, async () => {
      const { password, code } = req.body;

      if (!password || !code) {
        return res
          .status(401)
          .end('Invalid credentials: Both password and code are required');
      }

      const emailConfirmation = await prisma.emailConfirmation.findMany({
        where: {
          code: code,
        },
      });

      if (!emailConfirmation || emailConfirmation.length === 0) {
        return res
          .status(401)
          .end('Invalid code: The provided code does not exist');
      }

      const confirmedEmail = emailConfirmation[0].email;

      await prisma.user.update({
        where: { email: confirmedEmail },
        data: {
          password: convertPasswordToHash(password),
          updatedAt: new Date(),
        },
      });

      await prisma.emailConfirmation.delete({
        where: { email: confirmedEmail },
      });

      res.status(200).json({ message: 'Password changed successfully' });
    });
  } catch (e) {
    console.error('Error occurred:', e);
    res
      .status(500)
      .json({ error: 'An unexpected error occurred. Please try again later.' });
  }
};

export default ChagerPassword;
