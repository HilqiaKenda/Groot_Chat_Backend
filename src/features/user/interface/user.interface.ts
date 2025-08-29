import mongoose, { Document } from "mongoose";
import { ObjectId } from "mongoose";

export interface UserDocumentinterface extends Document {
  _id: string | ObjectId;
  authId: string | ObjectId;
  username: string;
  email?: string;
  password?: string;
  avatarColor: string;
  uId?: string;
  postCount: number;
  work: string;
  school: string;
  quote: string;
  location: string;
  blocked: mongoose.Types.ObjectId[];
  blockedBY: mongoose.Types.ObjectId[];
  followersCount: number;
  followingCount: number;
  notifications: NotificationSettingsInterface;
  social: SocialLinksInteface;
  bgImageVersion: string;
  bgImageId: string;
  profilePicture: string;
  passwordRsetToken?: string;
  passwordResetExpires?: number | string;
  createAt: Date;
}

export interface UserInterface {
  _id: string | ObjectId;
  authId: string | ObjectId;
  uId: string;
  username: string;
  email: string;
  password?: string;
  avatarColor: string;
  createAt: Date;
  postCount: number;
  work: string;
  school: string;
  quote: string;
  location: string;
  blocked: mongoose.Types.ObjectId[];
  blockedBY: mongoose.Types.ObjectId[];
  followersCount: number;
  followingCount: number;
  notifications: NotificationSettingsInterface;
  social: SocialLinksInteface;
  bgImageVersion: string;
  bgImageId: string;
  profilePicture: string;
  passwordRsetToken?: string;
  passwordResetExpires?: number | string;
}

export interface SocialLinksInteface {
  facebook: string;
  instagram: string;
}

export interface NotificationSettingsInterface {
  message: boolean;
  reations: boolean;
  comment: boolean;
  followa: boolean;
}

export interface ResetPasswordParamsInteface {
  username: string;
  email: string;
  ipaddress: string;
  date: Date;
}

export interface BaseInfoInterface {
  quote: string;
  work: string;
  scsool: string;
  locaion: string;
}

export interface SocketDataInterface {
  blockedUser: string;
  blockedBy: string;
}

export interface LoginInterface {
  userId: string;
}

export interface UserJobInfoInterface {
  key: string;
  value?: string | SocialLinksInteface;
}

export interface UserJobInterface {
  keyOne?: string;
  keyTwo?: string;
  key?: string;
  value?: string | NotificationSettingsInterface | UserDocumentinterface;
}

export interface EmailJobInterface {
  receiverEmail: string;
  template: string;
  subject: string;
}

export interface AllUsersInterface {
  users: string;
  totalUsers: number;
}
