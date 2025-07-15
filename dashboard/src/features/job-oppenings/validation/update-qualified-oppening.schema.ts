import z from "zod"

export const updateQualifiedOppeningSchema = z.object({
  id: z.string(),
  title: z.string().optional(),
  department: z.string().optional(),
  quantity: z.string().optional(),
  requirements: z.union([z.array(z.string()), z.string()]).optional(),
})

export type UpdateQualifiedOppeningDTO = z.infer<
  typeof updateQualifiedOppeningSchema
>
