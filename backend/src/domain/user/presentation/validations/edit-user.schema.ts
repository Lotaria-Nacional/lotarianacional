import { z } from "zod";

export const editUserSchema = z.object({
    id: z.string(),
    email: z.string().email().optional(),
    password: z.string().optional(),
    lastName: z.string().optional(),
    role: z.string().optional(),
    firstName: z.string().optional(),
    profilePic: z.any().optional()
})

export type EditUserDTO = z.infer<typeof editUserSchema>