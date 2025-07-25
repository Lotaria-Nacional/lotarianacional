import z from "zod";

export const createJobOppeningSchema = z.object({
  title: z.string({ required_error: "A função é obrigatória" }),
  department: z.string({ required_error: "O departamento é obrigatório" }),
  requirements: z.array(z.string(), { required_error: "Os requisitos são obrigatórios" }),
  description: z.string().optional(),
  quantity: z.coerce.number(),
  responsabilities: z.array(z.string()).optional(),
});

export type CreateJobOppeningDTO = z.infer<typeof createJobOppeningSchema>;
