import { z } from 'zod';

export const signUpFormSchema = z.object({
  domain: z
    .string()
    .min(1, 'Обязательное поле')
    .max(50, 'Домен не должен содержать более 50 символов'),
  phone: z
    .string()
    .min(15, 'Введите телефон полностью')
    .nonempty('Обязательное поле'),
});
