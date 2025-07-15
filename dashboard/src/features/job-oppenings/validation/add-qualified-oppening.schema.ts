import z from "zod"

export const addQualifiedOppeningSchema = z.object({
  title: z.string(),
  department: z.string(),
  quantity: z.string(),
  requirements: z.union([z.array(z.string()), z.string()]),
})

export type AddQualifiedOppeningType = z.infer<
  typeof addQualifiedOppeningSchema
>
