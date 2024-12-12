import { Request, Response } from "express"
import { GetBannersUseCase } from "../../../../application/useCases/banner/get.banners.useCase"

export class GetBannersController {
  constructor(private getBannersUseCase: GetBannersUseCase) {}

  async handle(req: Request, res: Response) {
    const banners = await this.getBannersUseCase.execute()
    return res.status(200).json(banners)
  }
}
