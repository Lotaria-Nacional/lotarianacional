import { Request, Response } from "express"
import { GetResultsUseCase } from "../../../../Application/UseCases/Result/GetResultsUseCase"

export class GetResultsController {
  constructor(private getResultsUseCase: GetResultsUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const results = await this.getResultsUseCase.execute()

      return res.status(200).json(results)
    } catch (error: any) {
      return res.status(500).json({ message: error.message })
    }
  }
}
