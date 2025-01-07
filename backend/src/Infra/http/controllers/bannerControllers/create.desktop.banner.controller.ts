import { Request, Response } from "express";
import { ExpressFileType } from "../recruitmentControllers/recruitCandidate.controller";
import { CreateDesktopBannerInputDTO, CreateDesktopBannerUseCase } from "../../../../application/useCases/banner/create.desktopBanner.useCase";

export class CreateDesktopBannerController {
  constructor(private createDesktopBannerUseCase: CreateDesktopBannerUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const files = req.files as ExpressFileType;
      const missingFields = this.validate(files);

      if (missingFields.length > 0) {
        const message = `Os seguintes campos são obrigatórios: ${missingFields.join(", ")}`;
        return res.status(400).json(message);
      }

      const desktopBanners: CreateDesktopBannerInputDTO = {
        desk_banner_1: files["desk_1"][0].buffer,
        desk_banner_2: files["desk_2"][0].buffer,
        desk_banner_3: files["desk_3"][0].buffer,
      };

      await this.createDesktopBannerUseCase.execute(desktopBanners);

      return res.status(201).json({ message: "Adicionado com sucesso." });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        return res.status(500).json({ error: "Erro ao criar banner.", err: error.message });
      }
    }
  }

  private validate(files: ExpressFileType): string[] {
    const requiredFields = ["desk_1", "desk_2", "desk_3"];
    const missingFields = requiredFields.filter((field) => !files[field]);
    return missingFields;
  }
}
