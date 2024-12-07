import { z } from "zod"
import { Request, Response } from "express"
import { CreateUserUseCase } from "../../../../Application/UseCases/User/CreateUserUseCase"

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response) {
    const profileImage = req.file?.buffer
    try {
      const createUserSchema = z.object({
        firstName: z.string(),
        lastName: z.string(),
        email: z.string().email(),
        password: z
          .string()
          .min(6, "A palavra-passe deve conter pelo menos 6 caractéres."),
        profilePic: z.string().optional(),
      })

      const user = createUserSchema.parse(req.body)
      await this.createUserUseCase.execute({...user,profilePic: profileImage})
      return res.status(201).json({ message: "Usuário criado com sucesso!" })
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: error.errors[0].message })
      }
      console.error(error)
      return res.status(500).json({ message: "Internal server error" })
    }
  }
}
