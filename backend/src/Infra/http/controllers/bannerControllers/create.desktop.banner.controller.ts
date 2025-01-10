import { Request, Response } from "express";
import { ExpressFileType } from "../recruitmentControllers/recruitCandidate.controller";
import { ICreateBannerInputDTO, CreateBannerUseCase } from "../../../../application/useCases/banner/create.banner.useCase";

export class CreateBannerController {
  constructor(private createBannerUseCase: CreateBannerUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const files = req.files as ExpressFileType;

      const banners: ICreateBannerInputDTO = {
        desk_banner_1: files["desk_1"]?.[0]?.buffer || undefined,
        desk_banner_2: files["desk_2"]?.[0]?.buffer || undefined,
        desk_banner_3: files["desk_3"]?.[0]?.buffer || undefined,
        mob_banner_1: files["mob_1"]?.[0]?.buffer || undefined,
        mob_banner_2: files["mob_2"]?.[0]?.buffer || undefined,
        mob_banner_3: files["mob_3"]?.[0]?.buffer || undefined,
      };

      await this.createBannerUseCase.execute(banners);

      return res.status(201).json({ message: "Adicionado com sucesso." });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        return res.status(500).json({ error: "Erro ao criar banner.", err: error.message });
      }
    }
  }

  private validate(files: ExpressFileType): string[] {
    const requiredFields = ["desk_1", "desk_2", "desk_3", "mob_1", "mob_2", "mob_3"];
    const missingFields = requiredFields.filter((field) => !files[field]);
    return missingFields;
  }
}
