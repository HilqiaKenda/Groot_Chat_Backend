import { UserDocumentinterface } from "@user/interface/user.interface";
import mongoose, { model, Model, Schema } from "mongoose";

const userSchema: Schema = new Schema({
  authid: { type: mongoose.Schema.Types.ObjectId, ref: "Auth" },
  profilePicture: { type: String, default: "" },
  postCount: { tye: Number, default: 0 },
  followersCount: { type: Number, default: 0 },
  followingCount: { type: Number, default: 0 },
  passwordRsetToken: { type: String, default: "" },
  passwordResetExpires: { type: String, default: "" },
  password: { type: String, default: "" },
  blocked: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  blockedBY: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  notifications: {
    message: { type: Boolean, defaut: true },
    reactions: { type: Boolean, defaut: true },
    comment: { type: Boolean, defaut: true },
    follows: { type: Boolean, defaut: true },
  },
  social: {
    message: { type: String, defaut: "" },
    reactions: { type: String, defaut: "" },
    comment: { type: String, defaut: "" },
    follows: { type: String, defaut: "" },
  },
  work: { type: String, default: "" },
  school: { type: String, default: "" },
  avatarColor: { type: String, default: "" },
  email: { type: String, default: "" },
  uId: { type: String, default: "" },
  quote: { type: String, default: "" },
  location: { type: String, default: "" },
  bgImageVersion: { type: String, default: "" },
  bgImageId: { type: String, default: "" },
});

const UserModel: Model<UserDocumentinterface> = model<UserDocumentinterface>(
  "User",
  userSchema,
  "User"
);

export { UserModel };
