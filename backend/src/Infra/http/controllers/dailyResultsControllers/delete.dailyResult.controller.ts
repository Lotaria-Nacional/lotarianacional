import { Request, Response } from "express"
import { DeleteDailyResultUseCase } from "../../../../application/useCases/dailyResult/delete.dailyResult.useCase"
import { NotFoundError } from "../../../../shared/errors/notFound.error"
import { z } from "zod"

export class DeleteDailyResultsController {
  constructor(private deleteDailyResultUseCase: DeleteDailyResultUseCase) {}

  async handle(req: Request, res: Response) {
    const idSchema = z.string()
    try {
      const id = idSchema.parse(req.params.id)
      await this.deleteDailyResultUseCase.execute(id)

      return res.status(200).json({ message: "Removido com sucesso." })
    } catch (error) {
      if (error instanceof NotFoundError) {
        return res.status(404).json({ message: error.message })
      }
      return res.status(500).json({ message: "Erro interno no servidor." })
    }
  }
}
