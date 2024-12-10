import {
  UpdateUserInputDTO,
  UpdateUserUseCase,
} from "../../../../application/useCases/user/update.user.useCase"
import { Request, Response } from "express"

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params
    const profileImage = req.file?.buffer
    const { firstName, lastName, email, password } = req.body

    const data: UpdateUserInputDTO = {
      firstName,
      lastName,
      email,
      password,
      profilePic: profileImage,
    }

    const updatedUser = await this.updateUserUseCase.execute(id!, data)

    return res
      .status(200)
      .json({ message: "Usuário atualizado", data: updatedUser })
  }
}
