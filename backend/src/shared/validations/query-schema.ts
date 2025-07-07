import z from "zod";

export const QuerySchema = z.object({
    page:z.coerce.number().optional(),
    limit:z.coerce.number().optional(),
})