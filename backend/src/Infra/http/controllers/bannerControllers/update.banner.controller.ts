import { Request, Response } from "express";
import { ExpressFileType } from "../recruitmentControllers/recruitCandidate.controller";
import { IUpdateBannerInputDTO, UpdateBannerUseCase } from "../../../../application/useCases/banner/update.banner.useCase";

export class UpdateBannerController {
  constructor(private updateBannerUseCase: UpdateBannerUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const files = req.files as ExpressFileType;
      const updateBanners: IUpdateBannerInputDTO = {
        desk_banner_1: files["desk_1"]?.[0].buffer,
        desk_banner_2: files["desk_2"]?.[0].buffer,
        desk_banner_3: files["desk_3"]?.[0].buffer,
        mob_banner_1: files["mob_1"]?.[0].buffer,
        mob_banner_2: files["mob_2"]?.[0].buffer,
        mob_banner_3: files["mob_3"]?.[0].buffer,
      };
      await this.updateBannerUseCase.execute(updateBanners);
      return res.status(200).json({ message: "Atualizado com sucesso." });
    } catch (error) {
      return res.status(500).json({ error: error, message: "Erro interno no servidor" });
    }
  }
}
