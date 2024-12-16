import { z } from "zod"

export const createDailyResultSchema = z.object({
  hour: z.string().min(1),
  name: z.string().min(1),
  number_1: z.number().min(1).max(90),
  number_2: z.number().min(1).max(90),
  number_3: z.number().min(1).max(90),
  number_4: z.number().min(1).max(90),
  number_5: z.number().min(1).max(90),
})
