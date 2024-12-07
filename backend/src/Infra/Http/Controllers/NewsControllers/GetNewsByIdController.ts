import { Request, Response } from "express"
import { NotFoundError } from "../../../../Shared/Errors/NotFoundError"
import { PrismaNewsRespository } from "../../../Repositories/prisma/PrismaNewsRepository"
import { GetNewsByIdUseCase } from "../../../../Application/UseCases/News/GetNewsByIdUseCase"

export class GetNewsByIdController {
  constructor(private getNewsByIdUseCase: GetNewsByIdUseCase) {}

  async handle(req: Request<{ id: string }>, res: Response) {
    try {
      const newsData = await this.getNewsByIdUseCase.execute(req.params.id)
      return res.status(200).json(newsData)
    } catch (error) {
      if (error instanceof NotFoundError) {
        return res.status(404).json({ message: error.message })
      }
      return res.status(500).json({ message: "Erro interno no servidor." })
    }
  }
}
