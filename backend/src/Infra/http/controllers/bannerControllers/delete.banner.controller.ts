import { Request, Response } from "express"
import { DeleteBannerUseCase } from "../../../../application/useCases/banner/delete.banner.useCase"
import { NotFoundError } from "../../../../shared/errors/notFound.error"
import { z } from "zod"

export class DeleteBannerController {
  constructor(private deleteBannerUseCase: DeleteBannerUseCase) {}
  async handle(req: Request, res: Response) {
    const idScheme = z.object({
      id: z.string(),
    })
    try {
      const { id } = idScheme.parse(req.params)
      await this.deleteBannerUseCase.execute(id)
      return res.status(200).json({ message: "Removido com sucesso." })
    } catch (error) {
      if (error instanceof NotFoundError) {
        return res.status(404).json({ message: error.message })
      }
      return res
        .status(500)
        .json({ message: "Erro interno no servidor.", error: error })
    }
  }
}
