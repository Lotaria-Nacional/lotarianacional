import z from "zod";

export const createPartnerJobOppeningSchema = z.object({
  title: z.string({ required_error: "A função é obrigatória" }),
  location: z.string({ required_error: "A localização é obrigatória" }),
  type: z.string({ required_error: "O tipo é obrigatório" }),
  requirements: z.array(z.string(), { required_error: "Os requisitos são obrigatórios" }),
  description: z.string().optional(),
  quantity: z.coerce.number(),
  responsabilities: z.array(z.string()).optional(),
});

export type CreatePartnerJobOppeningDTO = z.infer<typeof createPartnerJobOppeningSchema>;
