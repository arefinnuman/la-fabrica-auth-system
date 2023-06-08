import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../config/catchAsync';
import sendResponse from '../../../config/sendResponse';
import { UserService } from './user.service';

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body;
    const result = await UserService.createUser(user);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: `User Created Successfully`,
      data: result,
    });
    next();
  }
);

export const UserController = {
  createUser,
};
