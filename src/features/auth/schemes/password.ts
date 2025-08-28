import Joi, { ObjectSchema } from "joi";

const emailSchema: ObjectSchema = Joi.object().keys({
  email: Joi.string().required().messages({
    "string.object": "Email must be of typestring",
    "string.email": "email must be valid",
    "string.empty": "email is a required field",
    "string.required": "Field must be valid",
  }),
});

const passwordSchema: ObjectSchema = Joi.object().keys({
  password: Joi.string().required().min(4).max(16).messages({
    "string.base": "passwordshould be be of type string",
    "string.min": "incorrect password",
    "string.max": "incorrect password",
    "string.empty": "password is a required field",
  }),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
    "any.only": "password should match",
    "any.required": "This confirm field is a required field",
  }),
});

export { passwordSchema, emailSchema };
