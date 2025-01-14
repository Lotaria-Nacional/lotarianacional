import { Request, Response } from "express";
import { CreateBannerUseCase } from "../../../../application/useCases/banner/create.banner.useCase";
import { z } from "zod";

export class CreateBannerController {
  constructor(private createBannerUseCase: CreateBannerUseCase) {}

  async handle(req: Request, res: Response) {
    const file = req.file as Express.Multer.File;
    const fileBuffer = file?.buffer;
    const bannerSchema = z.object({
      device: z.string().min(1, "Por favor, informe o tipo de dispositivo."),
    });

    try {
      if (!fileBuffer) {
        return res.status(400).json({ message: "Por favor, envie uma imagem válida." });
      }

      const body = bannerSchema.parse(req.body);
      await this.createBannerUseCase.execute({ ...body, image: fileBuffer });

      return res.status(201).json({ message: "Banner salvo com sucesso." });
    } catch (error) {
      return res.status(500).json({ error, message: "Erro interno." });
    }
  }
}
