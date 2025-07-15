import z from "zod"

export const addPartnerOppeningSchema = z.object({
  quantity: z.string(),
  type: z.string(),
  location: z.string(),
  requirements: z.union([z.array(z.string()), z.string()]),
})

export type AddPartnerOppeningDTO = z.infer<typeof addPartnerOppeningSchema>
