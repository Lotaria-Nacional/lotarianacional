import { Request, Response } from "express"
import { GetUsersUseCase } from "../../../../Application/UseCases/User/GetUsersUseCase"

export class GetUsersController {
  constructor(private getUsersUseCase: GetUsersUseCase) {}

  async handle(req: Request, res: Response) {
    const users = await this.getUsersUseCase.execute()
    if (users.length === 0) {
      return res.json({ message: "Não há usuários cadastrados ainda." })
    }

    return res.status(200).json(users)
  }
}
