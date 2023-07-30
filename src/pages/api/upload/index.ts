/* eslint-disable */
import * as mime from 'mime-types';
import { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';
import multer from 'multer';
import { authenticate } from '@utils';

export const config = {
  api: {
    bodyParser: false,
  },
};

interface NextApiRequestExtended extends NextApiRequest {
  file: any;
  files: any;
}

const upload = multer({
  storage: multer.diskStorage({
    destination: (request, file, callback) => {
      const { isProjectPic } = request.query;
      const destinationPath =
        isProjectPic === 'true' ? `./public/` : `./public/`;
      callback(null, destinationPath);
    },
    filename: (request, file, callback) => {
      const extension = mime.extension(file.mimetype);
      if (typeof extension === `string`) {
        const fileName = `curriculo.${extension}`;
        callback(null, fileName);
      } else {
        callback(null, new Error('Only PDF files are allowed').message);
      }
    },
  }),
  // 1MB
  limits: { fileSize: 1 * 1024 * 1024 },
  fileFilter: (request, file, callback) => {
    if (file.mimetype === 'application/pdf') {
      callback(null, true);
    } else {
      return callback(new Error('Only PDF files are allowed'));
    }
  },
});

function runMiddleware(
  request: NextApiRequestExtended,
  response: NextApiResponse,
  function_: any,
) {
  return new Promise((resolve, reject) => {
    function_(request, response, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

const Upload = async (
  request: NextApiRequestExtended,
  response: NextApiResponse,
  function_: any,
) => {
  await NextCors(request, response, {
    methods: ['POST'],
    origin: '*',
    optionsSuccessStatus: 200,
  });

  authenticate(request, response, async () => {
    try {
      await runMiddleware(request, response, upload.single('file'));
      if (!request.file) {
        return response.status(404).end('File was not provided');
      }
      const file = request.file;
      return response.status(200).send({
        filename: file.filename,
        size: file.size,
        path: file.path,
      });
    } catch (error: any) {
      return response.status(404).end(error.message);
    }
  });
};

export default Upload;
