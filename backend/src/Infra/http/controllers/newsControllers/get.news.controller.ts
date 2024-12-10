import { Request, Response } from "express"
import { PrismaNewsRespository } from "../../../repositories/prisma/prisma.news.repository"
import { GetNewsUseCase } from "../../../../application/useCases/news/get.news.useCase"

export class GetNewsController {
  constructor(private getNewsUseCase: GetNewsUseCase) {}
  async handle(req: Request, res: Response) {
    try {
      const news = await this.getNewsUseCase.execute()
      return res.status(200).json(news)
    } catch (error) {
      return res.status(500).json({ message: "Erro interno no servidor." })
    }
  }
}
