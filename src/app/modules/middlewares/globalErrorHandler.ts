/* eslint-disable no-unused-expressions */
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { Error } from 'mongoose';
import { ZodError } from 'zod';
import ApiError from '../../../errors/ApiError';
import handleValidationError from '../../../errors/ValidationError';
import handleZodError from '../../../errors/ZodError';
import { IGenericErrorMessage } from '../../../interfaces/IGenericErrorMessage';
import config from '../../config';
import { errorLogger } from '../../config/logger';

const globalErrorHandler: ErrorRequestHandler = (
  error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  config.env === 'development'
    ? console.log(`Global Error Handler ~~`, error)
    : errorLogger.error(`Global Error Handler ~~`);

  let statusCode = 500;
  let message = 'Something went wrong !';
  let errorMessages: IGenericErrorMessage[] = [];
  // Validation Error
  if (error?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  }

  // Zod Error
  else if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  }
  // Api Error
  else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  }
  // Regular Error
  else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  }

  // Default Error
  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? error?.stack : undefined,
  });

  next();
};

export default globalErrorHandler;
