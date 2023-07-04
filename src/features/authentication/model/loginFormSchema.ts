import { z } from 'zod';

export const loginFormSchema = z.object({
  phone: z.string().max(12),
  password: z.string().min(6),
});
