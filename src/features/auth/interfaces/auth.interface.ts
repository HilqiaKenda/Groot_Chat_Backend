import { Document, ObjectId } from "mongoose";

declare global {
  namespace Express {
    interface Request {
      currentUser?: AuthPayload;
    }
  }
}

export interface AuthPayload {
  userId: string;
  uId: string;
  email: string;
  username: string;
  avatarColor: string;
  iat?: number;
}

export interface IAuthDocument extends Document {
  _id: string | ObjectId;
  uId: string;
  email: string;
  username: string;
  password: string;
  avaterColor: string;
  createAt: Date;
  comparePassword(password: string): Promise<boolean>;
  hashPassword(password: string): Promise<boolean>;
}

export interface ISignUpData {
  _id: ObjectId;
  uid: string;
  email: string;
  username: string;
  avatarColor: string;
}

export interface IAuthJob {
  value?: string | IAuthDocument;
}
