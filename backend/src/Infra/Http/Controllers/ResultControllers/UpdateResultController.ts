import { z } from "zod"
import { Request, Response } from "express"
import { NotFoundError } from "../../../../Shared/Errors/NotFoundError"
import { UpdateResultUseCase } from "../../../../Application/UseCases/Result/UpdateResultUseCase"

export class UpdateResultController {
  constructor(private updateResultUseCase: UpdateResultUseCase) {}

  async handle(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params
    const updateResultSchema = z.object({
      sorted_number_1: z.number().optional(),
      sorted_number_2: z.number().optional(),
      sorted_number_3: z.number().optional(),
      sorted_number_4: z.number().optional(),
      sorted_number_5: z.number().optional(),
    })

    try {
      const data = updateResultSchema.parse(req.body)
      const result = await this.updateResultUseCase.execute(id, data)
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
