import { z } from "zod"
import { Request, Response } from "express"
import { CreateAgencyUseCase } from "../../../../application/useCases/agency/create.agency.useCase"

export class CreateAgencyController {
  constructor(private createAgencyUseCase: CreateAgencyUseCase) {}

  async handle(req: Request, res: Response) {
    const createAgencySchema = z.object({
      name: z.string().min(1, "O nome da agência é obrigatório."),
      location_text: z
        .string()
        .min(1, "A localização da agência é obrigatória."),
      latitude: z.number().int(),
      longitude: z.number().int(),
    })
    try {
      const agencyData = createAgencySchema.parse(req.body)

      await this.createAgencyUseCase.execute(agencyData)

      return res.status(201).json({ message: "Criado com sucesso." })
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: error.errors[0].message })
      }
      return res.status(500).json(error.message)
    }
  }
}
