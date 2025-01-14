import { Request, Response } from "express";
import { DeleteBannerUseCase } from "../../../../application/useCases/banner/delete.banner.useCase";

export class DeleteBannerController {
  constructor(private deleteBannerUseCase: DeleteBannerUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await this.deleteBannerUseCase.execute(id);
      return res.status(200).json({ message: "Removido com sucesso." });
    } catch (error) {
      return res.status(500).json({ error: error, message: "Erro interno no servidor." });
    }
  }
}
