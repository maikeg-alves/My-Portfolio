import { Responsive, useMediaQuery } from './responsivesize/responsive';
import { prisma } from './prisma';
export { mergeProjects } from './mergeProjects';
export { orderProjects } from './orderProjects';
export { formatDate } from './formateData';
export { Responsive, useMediaQuery, prisma };
export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export type { CustomNextApiRequest } from './customResquet';
export {
  authenticate,
  chackePassword,
  convertPasswordToHash,
  generateRandomCode,
  generateToken,
} from './auth';
