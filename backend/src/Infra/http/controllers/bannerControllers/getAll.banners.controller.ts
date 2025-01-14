import { Request, Response } from "express";
import { GetAllBannersUseCase } from "../../../../application/useCases/banner/get.banners.useCase";

export class GetAllBannersController {
  constructor(private getAllBannersUseCase: GetAllBannersUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const banners = await this.getAllBannersUseCase.execute();
      return res.status(200).json(banners);
    } catch (error) {
      return res.status(500).json({ err: error, message: "Erro interno no servidor." });
    }
  }
}
