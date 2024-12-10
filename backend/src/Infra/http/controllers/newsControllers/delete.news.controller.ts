import { Request, Response } from "express"
import { NotFoundError } from "../../../../shared/errors/notFound.error"
import { DeleteNewsUseCase } from "../../../../application/useCases/news/delete.news.useCase"

export class DeleteNewsController {
  constructor(private deleteNewsUseCase: DeleteNewsUseCase) {}

  async handle(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params
    try {
      await this.deleteNewsUseCase.execute(id)
      return res.status(200).json({ message: "Removido com sucesso." })
    } catch (error) {
      if (error instanceof NotFoundError) {
        return res.status(404).json({ message: error.message })
      }
      return res.status(500).json({ message: "Erro interno no servidor." })
    }
  }
}
