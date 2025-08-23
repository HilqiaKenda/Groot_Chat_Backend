import { IAuthDocument } from "@auth/interfaces/auth.interface";
import { Model, model, Schema } from "mongoose";
import { hash, compare } from "bcryptjs";

const SALT_ROUND = 10;

const authSchema: Schema = new Schema(
  {
    username: { type: String },
    uId: { type: String },
    password: { type: String },
    avatarColor: { type: String },
    createAt: { type: String },
  },
  {
    toJSON: {
      transform(_doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);

authSchema.pre("save", async function (this: IAuthDocument, next: () => void) {
  const hashPassword: string = await hash(this.password as string, SALT_ROUND);
  this.password = hashPassword;
  next();
});

authSchema.methods.hashPassword = async function (
  password: string
): Promise<boolean> {
  const hashPassword: string = (this as unknown as IAuthDocument).password!;
  return compare(password, hashPassword);
};

authSchema.methods.hashPassword = async function (
  password: string
): Promise<string> {
  return hash(password, SALT_ROUND);
};

const AuthModel: Model<IAuthDocument> = model(
  "Auth",
  authSchema,
  "Auth"
) as unknown as Model<IAuthDocument>;

export { AuthModel };
