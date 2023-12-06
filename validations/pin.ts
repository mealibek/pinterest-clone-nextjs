import { z } from 'zod';

export const PinSchema = z.object({
    title: z.string(),
    description: z.string(),
    website: z.string().nonempty("Website is required"),
    urlPath: z.string().min(1, { message: "URL path is required" }),
});

export type PinSchemaType = z.infer<typeof PinSchema>;
