import z from "zod"

export const resellerSchema = z.object({
  firstName: z
    .string({ required_error: "O nome é obrigatório*" })
    .min(1, { message: "O nome é obrigatório" }),
  lastName: z
    .string({ required_error: "O sobrenome é obrigatório*" })
    .min(1, { message: "O sobrenome é obrigatório*" }),
  email: z
    .string({ required_error: "O email é obrigatório*" })
    .email({ message: "Insira um email válido" })
    .min(1, { message: "O email é obrigatório*" }),
  curriculum: z.instanceof(File, { message: "O currículo é obrigatório" }),
  phone: z
    .string({
      required_error: "O número de telefone é obrigatório*",
    })
    .min(1, { message: "O número de telefone é obrigatório*" })
    .regex(/^\d{9}$/, "O número de telefone deve conter exatamente 9 dígitos*")
    .transform(
      (val) => `${val.slice(0, 3)}-${val.slice(3, 6)}-${val.slice(6, 9)}`
    ),
  location: z
    .string({ required_error: "Selecione a localização*" })
    .min(1, { message: "O número de telefone é obrigatório*" }),
})

export type ResellerSchemaDTO = z.infer<typeof resellerSchema>
