import { z } from "zod";
import { AgencyEnum } from "../../enterprise/enum/agency-type.enum";

export const editAgencySchema = z.object({
    id: z.string(),
    name: z.string().optional(),
    type: z.nativeEnum(AgencyEnum, { errorMap: () => ({ message: "O tipo da agência é obrigatório." }) }).optional(),
    phone: z.number().optional(),
    latitude: z.number().optional(),
    longitude: z.number().optional(),
    location_text: z.string().optional(),
})

export type EditAgencyDTO = z.infer<typeof editAgencySchema>