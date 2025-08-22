import Joi, { ObjectSchema } from "joi";

const signinSchema: ObjectSchema = Joi.object().keys({
  username: Joi.string().required().min(4).max(10).messages({
    "string.base": "Username must be of type string",
    "string.min": "Invalid username",
    "string.max": "Invalid username",
    "string.empty": "Username is a required field",
  }),
  password: Joi.string().required().min(8).max(10).messages({
    "string.base": "Password must be of type dtring",
    "strind.min": "Incorrect password",
    "string.max": "Incorrect password",
    "string.empty": "password is a required field",
  }),
});

export { signinSchema };
