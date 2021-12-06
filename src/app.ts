import 'reflect-metadata';
import 'express-async-errors';
import 'dotenv/config';

import cors from 'cors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

import createConnection from '@database/index';
import { router } from '@routes/index';
import { AppError } from '@shared/errors/AppError';

import swaggerFile from './swagger.json';

import '@shared/container';

createConnection();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.use(
  (
    err: Error,
    request: express.Request,
    response: express.Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _next: express.NextFunction
  ) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message
      });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message} `
    });
  }
);

export { app };
