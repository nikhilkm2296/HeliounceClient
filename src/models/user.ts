import { LoginChannel } from '../enums/loginchannel';

export interface IUser {
  userId: string;
  name: string;
  userPicUrl: string;
  gender: string;
  accessToken: string;
  channel: LoginChannel;
}

export interface IUserPlace {
  name: string;
  userPicUrl: string;
}
