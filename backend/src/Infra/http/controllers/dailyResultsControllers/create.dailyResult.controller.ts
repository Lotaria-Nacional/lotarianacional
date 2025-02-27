import { z } from "zod";
import { Request, Response } from "express";
import { createDailyResultSchema } from "../../schemas/dailyResults.schemas";
import { CreateDailyResultUseCase } from "../../../../application/useCases/dailyResult/create.dailyResult.useCase";

export class CreateDailyResultsController {
  constructor(private createDailyResultUseCase: CreateDailyResultUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const body = createDailyResultSchema.parse(req.body);
      await this.createDailyResultUseCase.execute(body);
      return res.status(201).json({ message: "Criado com sucesso." });
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: error.errors[0].message });
      }
      return res.status(400).json({ message: error.message });
    }
  }
}
