export { mergeProjects } from './mergeProjects';
export { orderProjects } from './orderProjects';
export { formatDate } from './formateData';
export { Responsive, useMediaQuery } from './responsiveSize';

export {
  authenticate,
  chackePassword,
  convertPasswordToHash,
  generateRandomCode,
  generateToken,
} from './auth';

export { prisma } from './prisma';
export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export type { CustomNextApiRequest } from './customResquet';
