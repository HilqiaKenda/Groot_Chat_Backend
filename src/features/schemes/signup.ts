import Joi, { ObjectSchema } from "joi";

const signupSchema: ObjectSchema = Joi.object().keys({
  username: Joi.string().required().min(4).max(10).messages({
    "string.base": "Username must be of type string",
    "string.min": "Invalid username",
    "string.max": "Invalid username",
    "string.empty": "Usrname is a required field",
  }),
  password: Joi.string().required().min(8).max(16).messages({
    "string.base": "Password must be of type string",
    "string.min": "Inavlid Password",
    "string.max": "Invalid Password",
    "string.empty": "Password is a required field",
  }),
  email: Joi.string().required().email().messages({
    "string.base": "Email must be of type string",
    "string.email": "email must be valid",
    "string.empty": "email is a required field",
  }),
  avatarColor: Joi.string().required().messages({
    anyrequired: "Avatar color is required",
  }),
  avatarImage: Joi.string().required().messages({
    "any.required": "Avatar image is required",
  }),
});

export { signupSchema };
