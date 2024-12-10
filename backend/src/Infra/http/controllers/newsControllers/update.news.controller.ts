import { z } from "zod"
import { Request, Response } from "express"
import { NotFoundError } from "../../../../shared/errors/notFound.error"
import { UpdateNewsUseCase } from "../../../../application/useCases/news/update.news.useCase"

export class UpdateNewsController {
  constructor(private updateNewsUseCase: UpdateNewsUseCase) {}

  async handle(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params
    const fileImage = req.file?.buffer

    const updateNewsSchema = z.object({
      title: z.string().optional(),
      image: z.string().optional(),
      description: z.string().optional(),
    })
    try {
      const newsData = updateNewsSchema.parse(req.body)
      const updatedNews = await this.updateNewsUseCase.execute(id, {
        ...newsData,
        image: fileImage,
      })
      return res
        .status(200)
        .json({ message: "Atualizado com sucesso", data: updatedNews })
    } catch (error) {
      if (error instanceof NotFoundError) {
        return res.status(404).json({ message: error.message })
      }
      return res.status(500).json({ message: "Erro interno no servidor." })
    }
  }
}
