import { Request, Response } from "express"
import { CreateBannerUseCase } from "../../../../application/useCases/banner/create.banner.useCase"

export class CreateMobileBannerController {
  constructor(private createBannerUseCase: CreateBannerUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const files = req.files as Express.Multer.File[]

      await this.createBannerUseCase.execute({
        mob_banner_1: files.at(0)?.buffer,
        mob_banner_2: files.at(1)?.buffer,
        mob_banner_3: files.at(2)?.buffer,
      })

      return res.status(201).json({ message: "Adicionado com sucesso." })
    } catch (error: any) {
      return res.status(500).json({ error: error, message: error.message })
    }
  }
}
