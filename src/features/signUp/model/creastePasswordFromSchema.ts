import { z } from 'zod';

export const createPasswordFormSchema = z
  .object({
    password: z
      .string()
      .min(6, 'Пароль должен содержать не менее 6 символов')
      .nonempty('Обязательное поле'),
    confirmPassword: z
      .string()
      .min(6, 'Пароль должен содержать не менее 6 символов')
      .nonempty('Обязательное поле'),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Пароли не совпадают',
        path: ['password'],
      });
    }
  });
