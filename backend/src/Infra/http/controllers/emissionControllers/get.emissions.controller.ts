import { Request, Response } from "express";
import { GetEmissionUseCase } from "../../../../application/useCases/emission/get.emissionUseCase";

export class GetEmissionsController {
  constructor(private getEmissionUseCase: GetEmissionUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const emissions = await this.getEmissionUseCase.execute();
      return res.status(200).json(emissions);
    } catch (error) {
      return res.status(500).json({ error, message: "error: " + error });
    }
  }
}
