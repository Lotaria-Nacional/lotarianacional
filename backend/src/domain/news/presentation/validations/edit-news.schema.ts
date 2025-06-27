import { z } from "zod";

export const editNewsSchema = z.object({
    id: z.string(),
    title: z.string().optional(),
    description: z.string().optional(),
    image: z.any().optional()
})

export type EditNewsDTO = z.infer<typeof editNewsSchema>