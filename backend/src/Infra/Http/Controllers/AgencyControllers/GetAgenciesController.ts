import { Request, Response } from "express"
import { GetAgenciesUseCase } from "../../../../Application/UseCases/Agency/GetAgenciesUseCase"

export class GetAgenciesController {
  constructor(private getAgenciesUseCase: GetAgenciesUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const agencies = await this.getAgenciesUseCase.execute()
      return res.status(200).json(agencies)
    } catch (error: any) {
      return res.status(500).json({ message: error.message })
    }
  }
}
