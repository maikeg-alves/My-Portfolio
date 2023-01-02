import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

interface CustomNextApiRequest extends NextApiRequest {
  user?: any; //eslint-disable-line
}

export const authenticate = (
  req: CustomNextApiRequest,
  res: NextApiResponse,
  next: any, //eslint-disable-line
) => {
  const SECRET_KEY = process.env.SECRET_KEY as string;

  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).send('No token provided');

  const token = authHeader.split(' ')[1];

  jwt.verify(token, SECRET_KEY, (error, decoded) => {
    if (error) return res.status(401).send('Invalid token');
    req.user = decoded;
    next();
  });
};
