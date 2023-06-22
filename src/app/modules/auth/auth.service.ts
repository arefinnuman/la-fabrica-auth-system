import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { User } from '../user/users.model';
import { ILoginUser } from './auth.interface';

const loginUser = async (payload: ILoginUser) => {
  const { id, password } = payload;

  const user = new User();
  const isUserExist = await user.isUserExist(id);
  if (
    isUserExist?.password &&
    !user.isPasswordMatched(password, isUserExist?.password)
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, `Password is incorrect`);
  }
  return {};
};

export const AuthService = {
  loginUser,
};
