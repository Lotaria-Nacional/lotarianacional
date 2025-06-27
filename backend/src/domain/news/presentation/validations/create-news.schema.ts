import { z } from "zod";

export const createNewsSchema = z.object({
    title: z.string().min(1,'O título é obrigatório'),
    description: z.string().min(1,'A descrição é obrigatória'),
    image: z.any({ errorMap: ()=> ({ message:'A imagem é obrigatória' })}) 
})

export type CreateNewsDTO = z.infer<typeof createNewsSchema>