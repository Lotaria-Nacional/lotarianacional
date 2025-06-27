import { z } from "zod";

export const createDailyResultSchema = z.object({
  hour: z.string().min(1, "A hora é obrigatória."),
  name: z.string().min(1, "O nome é obrigatório."),
  videoURL: z.string().optional().nullable(),
  number_1: z.number().min(1, "O número deve ser maior que 0 e menor 90").max(90, "O número deve ser maior que 0 e menor 90"),
  number_2: z.number().min(1, "O número deve ser maior que 0 e menor 90").max(90, "O número deve ser maior que 0 e menor 90"),
  number_3: z.number().min(1, "O número deve ser maior que 0 e menor 90").max(90, "O número deve ser maior que 0 e menor 90"),
  number_4: z.number().min(1, "O número deve ser maior que 0 e menor 90").max(90, "O número deve ser maior que 0 e menor 90"),
  number_5: z.number().min(1, "O número deve ser maior que 0 e menor 90").max(90, "O número deve ser maior que 0 e menor 90"),
});

export type CreateDailyResultDTO = z.infer<typeof createDailyResultSchema>