import { Request } from 'express';

export interface CustomNextApiRequest extends Request {
  // Include the missing 'env' property
  env: Record<string, string>;
}
