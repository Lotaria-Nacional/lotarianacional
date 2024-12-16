import { Request, Response } from "express"
import { NotFoundError } from "../../../../shared/errors/notFound.error"
import { GetLastDailyResultUseCase } from "../../../../application/useCases/dailyResult/get.lastDailyResult.useCase"

export class GetLastDailyResultController {
  constructor(private getLastDailyResultUseCase: GetLastDailyResultUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const lastDailyResult = await this.getLastDailyResultUseCase.execute()
      return res.status(200).json(lastDailyResult)
    } catch (error) {
      if (error instanceof NotFoundError) {
        return res.status(404).json({ message: error.message })
      }
      return res
        .status(500)
        .json({ message: "Erro interno no servidor.", error: error })
    }
  }
}
