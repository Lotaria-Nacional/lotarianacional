import { Request, Response } from "express";
import { UpdateBannerUseCase } from "../../../../application/useCases/banner/update.banner.useCase";

export class UpdateBannerController {
  constructor(private updateBannerUseCase: UpdateBannerUseCase) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const file = req.file as Express.Multer.File;
    try {
      const fileBuffer = file?.buffer;

      await this.updateBannerUseCase.execute({
        id,
        image: fileBuffer,
      });

      return res.status(200).json({ message: "Atualizado com sucesso." });
    } catch (error) {
      return res.status(500).json({ error: error, message: "Erro interno no servidor" });
    }
  }
}
