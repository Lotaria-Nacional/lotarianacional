import z from 'zod'

export const skilledStaffSchema = z.object({
    firstName:z.string({invalid_type_error:"Insira caracteres válidos"}).min(1,{message: "O nome é obrigatório"}),
    lastName:z.string({invalid_type_error:"Insira caracteres válidos"}).min(1,{message: "O sobrenome é obrigatório*"}),
    email:z.string().email({message:"Insira um email válido"}).min(1,{message:  "O email é obrigatório*"}),
    curriculum: z.instanceof(FileList, { message:"O currículum vitae é obrigatório*"}).optional(),
    phone: z
        .string()
        .min(1,{message: "O número de telefone é obrigatório*"})
        .regex(/^\d{9}$/, 'O número de telefone deve conter exatamente 9 dígitos')
        .transform((val) => `${val.slice(0, 3)}-${val.slice(3, 6)}-${val.slice(6, 9)}`),
})

export type SkilledStaffSchemaDTO = z.infer<typeof skilledStaffSchema>