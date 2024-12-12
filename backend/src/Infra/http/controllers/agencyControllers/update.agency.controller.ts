import { z } from "zod"
import { Request, Response } from "express"
import { NotFoundError } from "../../../../shared/errors/notFound.error"
import { UpdateAgencyUseCase } from "../../../../application/useCases/agency/update.agency.useCase"

export class UpdateAgencyController {
  constructor(private updateAgencyUseCase: UpdateAgencyUseCase) {}

  async handle(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params
    const updateAgencySchema = z.object({
      name: z.string().optional(),
      phone: z.number().optional(),
      location_text: z.string().optional(),
      latitude: z.number().int().optional(),
      longitude: z.number().int().optional(),
    })

    try {
      const data = updateAgencySchema.parse(req.body)
      const updatedAgency = await this.updateAgencyUseCase.execute(id, data)
      return res
        .status(200)
        .json({ message: "Atualizado com sucesso.", data: updatedAgency })
    } catch (error) {
      if (error instanceof NotFoundError) {
        return res.status(404).json({ message: error.message })
      }
      return res.status(500).json({ message: "Erro interno no servidor." })
    }
  }
}
