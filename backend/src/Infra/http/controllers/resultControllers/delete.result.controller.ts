import { Request, Response } from "express"
import { NotFoundError } from "../../../../shared/errors/notFound.error"
import { DeleteResultUseCase } from "../../../../application/useCases/result/delete.result.useCase"

export class DeleteResultController {
  constructor(private deleteResultUseCase: DeleteResultUseCase) {}

  async handle(req: Request<{ id: string }>, res: Response) {
    try {
      const { id } = req.params
      await this.deleteResultUseCase.execute(id)
      return res.status(200).json({ message: "Removido com sucesso." })
    } catch (error) {
      if (error instanceof NotFoundError) {
        return res.status(404).json({ message: error.message })
      }
      return res.status(500).json({ message: "Erro interno no servidor." })
    }
  }
}
