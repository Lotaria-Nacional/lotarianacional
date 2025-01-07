import { Request, Response } from "express";
import { GetDailyResultsUseCase } from "../../../../application/useCases/dailyResult/get.dailyResults.useCase";

export class GetDailyResultsController {
  constructor(private getDailyResultsUseCase: GetDailyResultsUseCase) {}

  async handle(req: Request, res: Response) {
    const date = req.query.date as string;

    try {
      const results = await this.getDailyResultsUseCase.execute(date);
      return res.status(200).json(results);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
}
