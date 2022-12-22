import Joi, { AnySchema } from 'joi'

export enum EFormValues {
  firstName = 'firstName',
  phone = 'phone',
  email = 'email',
  message = 'message',
}

export type TFormValues = {
  [EFormValues.firstName]: string
  [EFormValues.phone]: string
  [EFormValues.email]: string
  [EFormValues.message]: string
}

/** Схема валидации полей формы создания/редактирования шаблона ИПТ. */
export const validationSchemaFeedbackFormFields = Joi.object<Record<EFormValues, AnySchema>>({
  [EFormValues.firstName]: Joi.string()
    .required()
    .trim()
    .min(1)
    .regex(/^[a-zA-Zа-яА-Я]+$/)
    .messages({
      'string.base': 'Поле должно быть текстовым',
      'string.empty': 'Поле не может быть пустым',
      'any.required': 'Поле обязательно для заполнения',
      'string.pattern.base': 'В имени должны содержаться только буквы',
    }),
  [EFormValues.phone]: Joi.string().min(10).required().messages({
    'any.required': 'Поле обязательно для заполнения',
    'string.min': 'Мобильный номер телефона должен состоять из 11 цифр',
    'string.max': 'Мобильный номер телефона должен состоять из 11 цифр',
  }),
  [EFormValues.email]: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'any.required': 'Поле обязательно для заполнения',
      'string.email': 'Почта должна быть формата someone@example.com',
    }),
  [EFormValues.message]: Joi.string().required().trim().min(1).messages({
    'string.empty': 'Поле не может быть пустым',
    'any.required': 'Поле обязательно для заполнения',
  }),
})
