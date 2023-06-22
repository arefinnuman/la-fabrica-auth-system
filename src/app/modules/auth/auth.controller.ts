import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../config/catchAsync';
import sendResponse from '../../../config/sendResponse';
import { AuthService } from './auth.service';

const loginUser = catchAsync(async (req: Request, res: Response) => {
  console.log(req.body);

  const { ...loginData } = req.body;
  const result = await AuthService.loginUser(loginData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `User logged in successfully !`,
    data: result,
  });
});

export const AuthController = {
  loginUser,
};
