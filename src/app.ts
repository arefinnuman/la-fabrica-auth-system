import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';

const app = express();

// MiddleWares
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes
app.use('/api/v1/', routes);

// Error Handling
app.use(globalErrorHandler);

// Not Found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: `Not Found`,
    errorMessages: [
      {
        path: req.originalUrl,
        message: `Api not found`,
      },
    ],
  });
  next();
});

export default app;
