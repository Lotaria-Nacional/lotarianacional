import { z } from "zod"
import { CreateBannerUseCase } from "../../../../application/useCases/banner/create.banner.useCase"
import { Request, Response } from "express"

export class CreateBannerController {
  constructor(private createBannerUseCase: CreateBannerUseCase) {}
  async handle(req: Request, res: Response) {
    const createBannerSchema = z.object({
      desktop_banner_1: z.any(),
    })
    try {
      const data = createBannerSchema.parse(req.body)
      await this.createBannerUseCase.execute(data)
      return res.status(201).json({ message: "Criado com sucesso." })
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: error.errors[0].message })
      }
      return res.status(500).json({ message: "Erro no servidor" })
    }
  }
}
