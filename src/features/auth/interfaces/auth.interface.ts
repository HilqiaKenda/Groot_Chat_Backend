import { ObjectId } from "mongodb";

declare global {
  namespace Express {
    interface Request {
      currentUser?: AuthPayloadInterface;
    }
  }
}

export interface AuthPayloadInterface {
  userId: string;
  uId: string;
  email: string;
  username: string;
  avatarColor: string;
  iat?: number;
}

export interface AuthDocumentInterface extends Document {
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

export interface SignUpDataInterface {
  _id: ObjectId;
  uid: string;
  email: string;
  username: string;
  password: string;
  avatarColor: string;
}

export interface AuthJobInterface {
  value?: string | AuthDocumentInterface;
}
