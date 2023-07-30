import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';

interface CustomNextApiRequest extends NextApiRequest {
  user?: any; //eslint-disable-line
}

interface TokenPayload {
  email?: string;
  code?: number;
}

const SECRET_KEY = process.env.SECRET_KEY as string;

export const authenticate = (
  req: CustomNextApiRequest,
  res: NextApiResponse,
  next: any, //eslint-disable-line
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).send('No token provided');

  const token = authHeader.split(' ')[1];

  jwt.verify(token, SECRET_KEY, (error, decoded) => {
    if (error) return res.status(401).send('Invalid token');
    req.user = decoded;
    next();
  });
};

export function generateToken(payload: TokenPayload): string {
  return jwt.sign(payload, SECRET_KEY, {
    expiresIn: '1h', // Token expira em 1 hora
  });
}

export const chackePassword = (senhaInserida: string, senhaHash: string) => {
  return bcrypt.compareSync(senhaInserida, senhaHash);
};

export const convertPasswordToHash = (password: string) => {
  const saltRounds = 10; // Número de salt rounds para aumentar a segurança do hash
  return bcrypt.hashSync(password, saltRounds);
};

export function generateRandomCode() {
  // Gera um número aleatório entre 100000 e 999999
  // (100000 é o menor valor de 6 dígitos e 999999 é o maior)
  const min = 100000;
  const max = 999999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
