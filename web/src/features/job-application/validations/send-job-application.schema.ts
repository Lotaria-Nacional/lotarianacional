import z from 'zod'

export const sendApplicationSchema = z.object({
    firstName:z.string({invalid_type_error:"Insira caracteres válidos"}).min(1,"O nome é obrigatório."),
    lastName:z.string({invalid_type_error:"Insira caracteres válidos"}).min(1,"O sobrenome é obrigatório."),
    gender:z.enum(["Masculino", "Feminino"], {message:"Selecione o seu gênero"}),
    email:z.string().email({message:"Insira um email válido"}).min(1, "O email é obrigatório"),
    phone: z
        .string()
        .min(1, 'O número de telefone é obrigatório')
        .regex(/^\d{9}$/, 'O número de telefone deve conter exatamente 9 dígitos')
        .transform((val) => `${val.slice(0, 3)}-${val.slice(3, 6)}-${val.slice(6, 9)}`),
        BI: z.instanceof(FileList, {message:"O Bilhete de identidade é obrigatório"}),
        residenceProof: z.instanceof(FileList).optional(),
})

export type SendApplicationDTO = z.infer<typeof sendApplicationSchema>