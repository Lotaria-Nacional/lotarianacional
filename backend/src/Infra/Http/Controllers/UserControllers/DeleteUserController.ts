import { Request, Response } from "express"
import { NotFoundError } from "../../../../Shared/Errors/NotFoundError"
import { DeleteUserUseCase } from "../../../../Application/UseCases/User/DeleteUserUseCase"

export class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}
  async handle(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params
    try {
      await this.deleteUserUseCase.execute(id)
      return res.status(200).json({ message: "Usuário removido com sucesso." })
    } catch (error) {
      if (error instanceof NotFoundError) {
        return res.status(404).json({ message: error.message })
      }
      return res.status(500).json({ message: "Erro interno do servidor." })
    }
  }
}
