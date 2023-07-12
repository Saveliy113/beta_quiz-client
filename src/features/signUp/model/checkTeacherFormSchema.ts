import { z } from 'zod';

export const checkTeacherFormSchema = z.object({
  domain: z
    .string()
    .nonempty('Обязательное поле')
    .max(50, 'Домен не должен содержать более 50 символов'),
  phone: z
    .string()
    .nonempty('Обязательное поле')
    .min(15, 'Введите телефон полностью'),
});
