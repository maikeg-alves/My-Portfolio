import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';
/* import { authenticate } from 'src/scripts'; */

const users = [
  {
    id: 1,
    email: process.env.EMAIL_ADMIN,
    password: process.env.PASS_ADMIN,
  },
];

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  await NextCors(req, res, {
    // Options
    methods: ['POST'],
    origin: '*',
    optionsSuccessStatus: 200,
  });

  switch (req.method) {
    case 'POST':
      // pegando as ifnormçoes do body
      const { email, password } = req.body;
      const SECRET_KEY = process.env.SECRET_KEY as string;

      // verificando se os dados estão preenchidos
      if (!email || !password)
        return res.status(401).send('Invalid credentials');

      // verificando se a resqueste bate com algum user do array
      const user = users.find(
        (user) => user.email === email && user.password === password,
      );

      // se não ele volta um error de credencial
      if (!user) return res.status(401).send('Invalid credentials');

      // se estiver tudi bem ele gera o token de acesso com uma hora de duration
      const token = jwt.sign({ email: user.email }, SECRET_KEY, {
        expiresIn: '1h', // 1 minuto para ispirar o token
      });

      res.send({
        user: user.email,
        date_creante_token: new Date(new Date().getTime() + 60),
        token: token,
      });

      break;
    case 'GET':
      try {
        const SECRET_KEY = process.env.SECRET_KEY as string;

        const authHeader = req.headers.authorization;

        if (!authHeader) return res.status(401).send({ valid: false });

        const token = authHeader.split(' ')[1];

        const decoded = jwt.verify(token, SECRET_KEY);

        if (decoded) {
          return res.send({ valid: true });
        }
      } catch (err) {
        return res.status(401).send({ valid: false });
      }
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).json('Method not allowed');
      break;
  }
}
