import { Request, Response } from "express"
import { PrismaNewsRespository } from "../../../Repositories/prisma/PrismaNewsRepository"
import { GetNewsUseCase } from "../../../../Application/UseCases/News/GetNewsUseCase"

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
