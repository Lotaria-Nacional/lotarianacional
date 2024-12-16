import { z } from "zod"
import { Request, Response } from "express"

import { NotFoundError } from "../../../../shared/errors/notFound.error"
import { InvalidPassword } from "../../../../shared/errors/invalid.password.error"
import { AuthenticateUserUseCase } from "../../../../application/useCases/user/authenticate.user.useCase"

export class LoginController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}

  async handle(req: Request, res: Response) {
    const authenticationSchema = z.object({
      email: z.string().email().min(1, "O email é obrigatório."),
      password: z.string().min(6, "A password é obrigatória."),
    })
    try {
      const authentication = authenticationSchema.parse(req.body)
      const { token, user } = await this.authenticateUserUseCase.execute(
        authentication.email,
        authentication.password
      )
      const userWithoutPassword = {
        id: user.id,
        email: user.email,
        name: `${user.firstName} ${user.lastName}`,
        role: user.role,
        profilePic: user.profilePic,
      }
      return res.status(200).json({
        message: "Login feito com sucesso.",
        user: userWithoutPassword,
        token: token,
      })
    } catch (error) {
      if (error instanceof NotFoundError) {
        return res.status(404).json({ message: error.message })
      }
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: error.errors[0].message })
      }
      if (error instanceof InvalidPassword) {
        return res.status(400).json({ message: error.message })
      }
      return res.status(500).json({ message: "Erro interno no servidor." })
    }
  }
}
