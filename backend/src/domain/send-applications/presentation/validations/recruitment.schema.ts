import { z } from "zod";

export const recruitmentSchema = z.object({
  cv: z.any(),
  email: z.string(),
  phone: z.string(),
  lastName: z.string().min(1, "O último nome é obrigatório."),
  firstName: z.string().min(1, "O primeiro nome é obrigatório."),
});

export type RecruitmentSchemaType = z.infer<typeof recruitmentSchema>;
