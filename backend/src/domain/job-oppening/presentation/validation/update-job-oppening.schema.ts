import z from "zod";

export const updateJobOppeningSchema = z.object({
    id:z.string({required_error:"O id não é válido"}).nonempty(),
    title:z.string().optional(),
    department:z.string().optional(),
    description:z.string().optional().optional(),
    requirements:z.array(z.string()).optional(),
    responsabilities:z.array(z.string()).optional(),
})

export type UpdateJobOppeningDTO = z.infer<typeof updateJobOppeningSchema>