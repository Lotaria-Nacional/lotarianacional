import { Request, Response } from "express";
import { ExpressFileType } from "../recruitmentControllers/recruitCandidate.controller";
import { CreateMobileBannerInputDTO, CreateMobileBannerUseCase } from "../../../../application/useCases/banner/create.mobileBanner.useCase";

export class CreateMobileBannerController {
  constructor(private createMobileBannerUseCase: CreateMobileBannerUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const files = req.files as ExpressFileType;
      const missingFields = this.validate(files);

      if (missingFields.length > 0) {
        const message = `Os seguintes campos são obrigatórios: ${missingFields.join(", ")}`;
        return res.status(400).json(message);
      }

      const desktopBanners: CreateMobileBannerInputDTO = {
        mob_banner_1: files["mob_1"][0].buffer,
        mob_banner_2: files["mob_2"][0].buffer,
        mob_banner_3: files["mob_3"][0].buffer,
      };

      await this.createMobileBannerUseCase.execute(desktopBanners);

      return res.status(201).json({ message: "Adicionado com sucesso." });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        return res.status(500).json({ error: "Erro ao criar banner.", err: error.message });
      }
    }
  }

  private validate(files: ExpressFileType): string[] {
    const requiredFields = ["mob_1", "mob_2", "mob_3"];
    const missingFields = requiredFields.filter((field) => !files[field]);
    return missingFields;
  }
}
