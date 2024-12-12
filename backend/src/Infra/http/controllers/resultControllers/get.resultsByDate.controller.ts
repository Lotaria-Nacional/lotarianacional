import { Request, Response } from "express"
import { GetResultsByDateUseCase } from "../../../../application/useCases/result/getResultsByDate.useCase"

export class GetResultsByDateController {
  constructor(private getResultsByDateUseCase: GetResultsByDateUseCase) {}

  async handle(req: Request, res: Response) {}
}
