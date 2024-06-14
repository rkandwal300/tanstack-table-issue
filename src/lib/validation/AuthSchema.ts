import { z } from 'zod';

export const SignInSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'Email is empty.',
    })
    .email({
      message: 'Please enter a valid email ',
    }),
  password: z.string().min(8, {
    message: 'Password should be atleast 8 characters.',
  }),
});

export const verifyEmailSchema = z.object({
  email: z.string().email(),
  otp: z.string().min(6, {
    message: 'Your one-time password must be 6 characters.',
  }),
});
