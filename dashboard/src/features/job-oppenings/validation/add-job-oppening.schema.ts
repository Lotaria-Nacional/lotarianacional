import z from "zod";

export const addJobOppeningSchema = z.object({
    function: z.string(),
    department: z.string(),
    quantity: z.string(),
    requirements: z
      .string().transform(val => val.toLowerCase().trim()),
  });

export type AddJobOppeningType = z.infer<typeof addJobOppeningSchema>