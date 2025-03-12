import { Request, Response } from "express";
import { GetAllDailyResultsUseCase } from "../../../../application/useCases/dailyResult/getAll.dailyResults.useCase";

export class GetAllDailyResultsController {
  constructor(private getAllDailyResultsUseCase: GetAllDailyResultsUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const results = await this.getAllDailyResultsUseCase.execute();
      
      return res.status(200).json(results);
    } catch (error) {
      return res.status(500).json({ message: "Error: " + error });
    }
  }
}
