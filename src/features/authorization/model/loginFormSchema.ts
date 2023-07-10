import { z } from 'zod';

export const loginFormSchema = z.object({
  phone: z
    .string()
    .nonempty('Обязательное поле')
    .min(15, 'Введите телефон полностью'),
  password: z
    .string()
    .nonempty('Обязательное поле')
    .min(6, 'Пароль должен содержать не менее 6 символов'),
});
