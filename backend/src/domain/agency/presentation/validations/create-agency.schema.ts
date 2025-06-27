import { z } from "zod";
import { AgencyEnum } from "../../enterprise/enum/agency-type.enum";

export const createAgencySchema = z.object({
    name:z.string().min(1, "O nome da agência é obrigatório"),
    phone:z.number(),
    latitude:z.number(),
    longitude:z.number(),
    type:z.nativeEnum(AgencyEnum, { errorMap: () => ({ message: "O tipo da agência é obrigatório." }) }),
    location_text:z.string().min(1,"A localização por texto é obrigatório"),  
})

export type CreateAgencyDTO = z.infer<typeof createAgencySchema>