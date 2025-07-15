import z from "zod"

export const updatePartnerOppeningSchema = z.object({
  id: z.string(),
  title: z.string().optional(),
  location: z.string().optional(),
  type: z.string().optional(),
  quantity: z.string().optional(),
  requirements: z.union([z.array(z.string()), z.string()]).optional(),
})

export type UpdatePartnerOppeningDTO = z.infer<
  typeof updatePartnerOppeningSchema
>
