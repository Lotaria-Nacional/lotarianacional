import { z } from "zod"
import { Request, Response } from "express"
import { NotFoundError } from "../../../../shared/errors/notFound.error"
import { UpdateUserUseCase } from "../../../../application/useCases/user/update.user.useCase"

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(req: Request, res: Response) {
    const idSchema = z.object({
      id: z.string(),
    })
    const updateUserSchema = z.object({
      firstName: z.string().optional(),
      lastName: z.string().optional(),
      email: z.string().email().optional(),
      password: z.string().optional(),
      profilePic: z.string().optional(),
      role: z.string().optional(),
    })

    try {
      const profileImage = req.file?.buffer
      const requestId = idSchema.parse(req.params)
      const updateUserData = updateUserSchema.parse(req.body)

      const updatedUser = await this.updateUserUseCase.execute(requestId.id, {
        ...updateUserData,
        profilePic: profileImage,
      })

      return res
        .status(200)
        .json({ message: "Usuário atualizado", data: updatedUser })
    } catch (error) {
      if (error instanceof NotFoundError) {
        return res.status(404).json({ message: error.message })
      }
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: error.errors[0].message })
      }
      return res
        .status(500)
        .json({ message: "Erro interno no servidor.", error: error })
    }
  }
}
