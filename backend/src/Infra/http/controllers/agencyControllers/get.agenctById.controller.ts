import { Request, Response } from "express"
import { NotFoundError } from "../../../../shared/errors/notFound.error"
import { GetAgencyByIdUseCase } from "../../../../application/useCases/agency/get.agencyById.useCase"

export class GetAgencyByIdController {
  constructor(private getAgencyByIdUseCase: GetAgencyByIdUseCase) {}

  async handle(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params
    try {
      const agency = await this.getAgencyByIdUseCase.execute(id)
      return res.status(200).json(agency)
    } catch (error) {
      if (error instanceof NotFoundError) {
        return res.status(404).json({ message: error.message })
      }
      return res.status(500).json({ message: "Erro interno no servidor." })
    }
  }
}
