import { Request, Response } from "express"
import { NotFoundError } from "../../../../shared/errors/notFound.error"
import { DeleteAgencyUseCase } from "../../../../application/useCases/agency/delete.agency.useCase"

export class DeleteAgencyController {
  constructor(private deleteAgencyUseCase: DeleteAgencyUseCase) {}

  async handle(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params
    try {
      await this.deleteAgencyUseCase.execute(id)
      return res.status(200).json({ message: "Removido com sucesso." })
    } catch (error) {
      if (error instanceof NotFoundError) {
        return res.status(404).json({ message: error.message })
      }
      return res.status(500).json({ message: "Erro interno no servidor." })
    }
  }
}
