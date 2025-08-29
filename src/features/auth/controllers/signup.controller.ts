import { ObjectId } from "mongodb";
import { Response, Request } from "express";
import { joiValidation } from "@global/decorators/joi-validation.decorators";
import { signupSchema } from "@auth/schemes/signup";
import {
  AuthDocumentInterface,
  SignUpDataInterface,
} from "@auth/interfaces/auth.interface";
import { authService } from "@service/db/auth.service";
import { BadRequestError } from "@global/helpers/errors-handler";
import { Helpers } from "@global/helpers/helpers";
import { UploadApiResponse } from "cloudinary";
import { uploads } from "@global/helpers/cloudinary-upload";
import HTTP_STATUS from "http-status-codes";

export class SignUp {
  @joiValidation(signupSchema)
  public async create(request: Request, response: Response): Promise<void> {
    const { username, email, password, avatarColor, avatarImage } =
      request.body;

    const checkIfUserExist: AuthDocumentInterface =
      await authService.getUserByUsenameOrEmail(username, email);

    if (checkIfUserExist) {
      throw new BadRequestError("Invalid credentials");
    }

    const authObjectId: ObjectId = new ObjectId();
    const userObjectId: ObjectId = new ObjectId();
    const uid = `${Helpers.generateRandomInteger(12)}`;
    const authData: AuthDocumentInterface = SignUp.prototype.signupData({
      _id: authObjectId,
      uid,
      username,
      email,
      password,
      avatarColor,
    });

    const result: UploadApiResponse = (await uploads(
      avatarImage,
      `${userObjectId}`,
      true,
      true
    )) as UploadApiResponse;
    if (!result?.public_id) {
      throw new BadRequestError("File upload: Error occured. try again");
    }

    response
      .status(HTTP_STATUS.CREATED)
      .json({ message: "User created succesfully", authData });
  }

  private signupData(data: SignUpDataInterface): AuthDocumentInterface {
    const { _id, username, email, uid, password, avatarColor } = data;
    return {
      _id,
      uid,
      username: Helpers.firstLetterUpperCase(username),
      email: Helpers.ToLowerCase(email),
      password,
      avatarColor,
      createdAt: new Date(),
    } as unknown as AuthDocumentInterface;
  }
}
