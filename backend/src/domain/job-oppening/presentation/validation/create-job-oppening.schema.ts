import z from "zod";

export const createJobOppeningSchema = z.object({
    title:z.string({required_error:""}),
    department:z.string({required_error:""}),
    description:z.string({required_error:""}).optional(),
    requirements:z.array(z.string()),
    responsabilities:z.array(z.string()),
})

export type CreateJobOppeningDTO = z.infer<typeof createJobOppeningSchema>