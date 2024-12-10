import { z } from "zod"
import { Request, Response } from "express"
import { CreateNewsUseCase } from "../../../../application/useCases/news/create.news.useCase"

export class CreateNewsController {
  constructor(private createNewsUseCase: CreateNewsUseCase) {}

  async handle(req: Request, res: Response) {
    const fileImage = req.file?.buffer

    const createNewsSchema = z.object({
      title: z.string().min(1, "O título é obrigatório."),
      image: z.string().min(1, "A imagem é obrigatória."),
      description: z.string().min(1, "A descrição é obrigatória."),
    })
    try {
      const newsData = createNewsSchema.parse(req.body)
      await this.createNewsUseCase.execute({ ...newsData, image: fileImage! })

      return res.status(201).json({ message: "Criado com sucesso!" })
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: error.errors[0].message })
      }
      return res.status(400).json({ message: "Erro interno no servidor." })
    }
  }
}
