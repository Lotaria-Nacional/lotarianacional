import { z } from "zod"
import { Request, Response } from "express"
import { NotFoundError } from "../../../../shared/errors/notFound.error"
import { UpdateResultUseCase } from "../../../../application/useCases/result/update.result.useCase"

export class UpdateResultController {
  constructor(private updateResultUseCase: UpdateResultUseCase) {}

  async handle(req: Request, res: Response) {
    const resultIdSchema = z.string()
    const updateResultSchema = z.object({
      number_1: z.number().int().optional(),
      number_2: z.number().int().optional(),
      number_3: z.number().int().optional(),
      number_4: z.number().int().optional(),
      number_5: z.number().int().optional(),
    })

    try {
      const id = resultIdSchema.parse(req.params.id)
      const data = updateResultSchema.parse(req.body)

      const updated = {
        id,
        number_1: data.number_1,
        number_2: data.number_2,
        number_3: data.number_3,
        number_4: data.number_4,
        number_5: data.number_5,
      }

      const result = await this.updateResultUseCase.execute(updated)

      return res
        .status(200)
        .json({ message: "Atualizado com sucesso.", data: result })
    } catch (error) {
      if (error instanceof NotFoundError) {
        return res.status(404).json({ message: error.message })
      }
      return res.status(500).json({ message: "Erro interno no servidor." })
    }
  }
}
