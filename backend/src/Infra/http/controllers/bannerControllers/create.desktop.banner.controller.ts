import { Request, Response } from "express"
import { CreateBannerUseCase } from "../../../../application/useCases/banner/create.banner.useCase"

export class CreateDesktopBannerController {
  constructor(private createBannerUseCase: CreateBannerUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const files = req.files as Express.Multer.File[]
      const banners = {
        desk_banner_1: files.at(0),
        desk_banner_2: files.at(1),
        desk_banner_3: files.at(2),
      }
      await this.createBannerUseCase.execute({
        desk_banner_1: banners.desk_banner_1?.buffer,
        desk_banner_2: banners.desk_banner_2?.buffer,
        desk_banner_3: banners.desk_banner_3?.buffer,
      })

      return res.status(201).json({ message: "Adicionado com sucesso." })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: "Erro ao criar banner." })
    }
  }
}
