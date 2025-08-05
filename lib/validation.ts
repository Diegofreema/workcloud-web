import { z } from 'zod';

export const accountDeletionSchema = z
  .object({
    email: z.string().email('Please enter a valid email address'),
    confirmEmail: z.string().email('Please enter a valid email address'),
    reason: z.string().optional(),
    feedback: z.string().optional(),
    confirmation: z.boolean().refine((val) => val === true, {
      message: 'You must confirm that you understand the consequences',
    }),
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: "Email addresses don't match",
    path: ['confirmEmail'],
  });

export type AccountDeletionFormData = z.infer<typeof accountDeletionSchema>;
