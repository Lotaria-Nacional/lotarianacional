import { Request, Response } from "express"
import { NotFoundError } from "../../../../Shared/Errors/NotFoundError"
import { GetUserByIdUseCase } from "../../../../Application/UseCases/User/GetUserByIdUseCase"

export class GetUserByIdController {
  constructor(private getUserByIdUseCase: GetUserByIdUseCase) {}
  async handle(req: Request, res: Response) {
    const { id } = req.params

    try {
      const user = await this.getUserByIdUseCase.execute(id)
      return res.status(200).json(user)
    } catch (error) {
      if (error instanceof NotFoundError) {
        return res.status(404).json({ message: error.message })
      }
      return res.status(500).json({ message: "Erro no servidor." })
    }
  }
}

//008418654LA049
