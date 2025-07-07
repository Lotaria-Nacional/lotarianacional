import z, { string } from "zod";

export const IdSchema = z.object({
    id:string().nonempty()
})