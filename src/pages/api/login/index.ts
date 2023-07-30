import { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';
import { prisma, chackePassword, generateToken } from '@libs';

const Login = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await NextCors(req, res, {
      methods: ['POST'], // Método deve ser POST para login
      origin: '*',
      optionsSuccessStatus: 200,
    });

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: 'Invalid credentials: Both email and password are required',
      });
    }

    const confirmedUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!confirmedUser) {
      return res
        .status(404)
        .json({ error: 'Invalid User: The provided user does not exist' });
    }

    // Verificando a senha do usuário
    if (!chackePassword(password, confirmedUser.password)) {
      return res
        .status(401)
        .json({ error: 'Invalid credentials: Incorrect password' });
    }

    // Gerando token de login
    const tokenLogin = generateToken({ email });

    res.status(200).json({
      message: 'Login successful',
      date_creante_token: new Date(new Date().getTime() + 60),
      token: tokenLogin,
    });
  } catch (e) {
    console.error('Error occurred:', e);
    res
      .status(500)
      .json({ error: 'An unexpected error occurred. Please try again later.' });
  }
};

export default Login;
