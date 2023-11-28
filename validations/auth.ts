import { z } from 'zod';

export const SignInSchema = z.object({
    email: z.string()
        .min(1, { message: "Email is required" })
        .email({ message: "Invalid email format" }),
    password: z
        .string()
        .min(6, { message: "Password must be 6-20 characters" })
        .max(20, { message: "Password must be 6-20 characters" })
        .refine(data => data.trim().length > 0, { message: "Password is required" }),
});

export type SignInSchemaType = z.infer<typeof SignInSchema>;
