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


export const SignUpSchema = z.object({
    firstname: z.string()
        .min(1, { message: "First name is required" }),
    lastname: z.string()
        .min(1, { message: "Last name is required" }),
    email: z.string()
        .min(1, { message: "Email is required" })
        .email({ message: "Invalid email format" }),
    password: z
        .string()
        .min(6, { message: "Password must be 6-20 characters" })
        .max(20, { message: "Password must be 6-20 characters" })
        .refine(data => data.trim().length > 0, { message: "Password is required" }),
    confirmPassword: z
        .string()
        .min(6, { message: "Confirm Password must be 6-20 characters" })
        .max(20, { message: "Confirm Password must be 6-20 characters" })
        .refine(data => data.trim().length > 0, { message: "Confirm Password is required" }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // path of error
})

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;