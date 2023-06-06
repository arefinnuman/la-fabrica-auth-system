import { Model } from 'mongoose';

export interface IUser {
  id: string;
  password: string;
  role: string;
}

export type UserModel = Model<IUser, object>;
