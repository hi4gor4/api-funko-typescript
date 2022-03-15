import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import AppError from '../error/AppError';
import '@shared/typeorm';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use((error: Error, request: Request, response: Response, next: Next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }
  return response.status(error).json({
    status: 'error',
    message: 'INternal Server Error',
  });
});

app.listen(4343, () => {
  console.log('server running on port 4343!!');
});
