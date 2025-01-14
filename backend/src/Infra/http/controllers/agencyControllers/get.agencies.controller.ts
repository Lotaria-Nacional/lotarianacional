import { Request, Response } from "express";
import { GetAgenciesUseCase } from "../../../../application/useCases/agency/get.agencies.useCase";

export class GetAgenciesController {
  constructor(private getAgenciesUseCase: GetAgenciesUseCase) {}

  async handle(req: Request, res: Response) {
    const { page = 1, pageSize = 10 } = req.query;
    try {
      const agencies = await this.getAgenciesUseCase.execute({
        page: parseInt(page as string, 10),
        pageSize: parseInt(pageSize as string, 10),
      });

      return res.status(200).json(agencies);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }
}
