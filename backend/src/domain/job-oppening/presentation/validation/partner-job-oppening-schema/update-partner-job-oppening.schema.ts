import z from "zod";

export const updatePartnerJobOppeningSchema = z.object({
  id: z.string({ required_error: "O id não é válido" }).nonempty(),
  title: z.string().optional(),
  location: z.string().optional(),
  type: z.string().optional(),
  description: z.string().optional().optional(),
  quantity: z.coerce.number().optional(),
  requirements: z.array(z.string()).optional(),
  responsabilities: z.array(z.string()).optional(),
});

export type UpdatePartnerJobOppeningDTO = z.infer<typeof updatePartnerJobOppeningSchema>;
