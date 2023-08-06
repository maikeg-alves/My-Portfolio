import { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';
import { authenticate } from '@utils'; // Importar função para verificar o token

const validateToken = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await NextCors(req, res, {
      methods: ['POST'],
      origin: '*',
      optionsSuccessStatus: 200,
    });

    authenticate(req, res, async () => {
      res.status(200).json({ message: 'Token is valid and active' });
    });
  } catch (error) {
    res.status(500).json({
      error: 'An unexpected error occurred. Please try again later.',
    });
  }
};

export default validateToken;
