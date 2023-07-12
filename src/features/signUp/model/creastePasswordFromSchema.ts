import { z } from 'zod';

export const createPasswordFormSchema = z
  .object({
    password: z.string().nonempty('Обязательное поле'),
    confirmPassword: z.string().nonempty('Обязательное поле'),
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
