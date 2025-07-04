import z from "zod"

export const resellerSchema = z.object({
  firstName: z
    .string({ required_error: "O nome é obrigatório*" })
    .min(2, { message: "O nome é muito curto" }),
  lastName: z
    .string({ required_error: "O sobrenome é obrigatório*" })
    .min(2, { message: "O sobrenome é muito curto" }),
  email: z
    .string({ required_error: "O email é obrigatório*" })
    .email({ message: "Insira um email válido*" }),
  proofOfAddress: z.instanceof(File).optional(),
  bi: z.instanceof(File, { message: "O bilhete de identidade é obrigatório*" }),
  phone: z
    .string({
      required_error: "O número de telefone é obrigatório*",
    })
    .regex(/^\d{9}$/, "O número de telefone deve conter exatamente 9 dígitos*")
    .transform(
      (val) => `${val.slice(0, 3)}-${val.slice(3, 6)}-${val.slice(6, 9)}`
    ),
})

export type ResellerSchemaDTO = z.infer<typeof resellerSchema>
