
import { z } from "zod";

export const createUserSchema = z.object({
    email: z.string().min(1,"O email é obrigatório").email(),
    firstName: z.string().min(1,"O nome é obrigatório"),
    lastName: z.string().min(1,"O sobrenome é obrigatório"),
    password: z.string().min(1,"A password é obrigatória"),
    role: z.string(),
    profilePic:z.any().optional()
})

export type CreateUserDTO = z.infer<typeof createUserSchema>