import { Request, Response } from "express";
import { GetBannersUseCase } from "../../../../application/useCases/banner/get.banners.useCase";

export class GetBannersController {
  constructor(private getBannersUseCase: GetBannersUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const banners = await this.getBannersUseCase.execute();
      return res.status(200).json(banners);
    } catch (error) {
      return res.status(500).json({ err: error, message: "Erro interno no servidor." });
    }
  }
}
