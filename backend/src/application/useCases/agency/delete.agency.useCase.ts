import { NotFoundError } from "../../../shared/errors/notFound.error"
import { IAgencyRespository } from "../../../Domain/Entities/Agency/agency.respository"

export class DeleteAgencyUseCase {
  constructor(private agencyRepository: IAgencyRespository) {}

  async execute(id: string) {
    const existingAgency = await this.agencyRepository.getById(id)
    if (!existingAgency) throw new NotFoundError("Agência não encontrada.")
    await this.agencyRepository.delete(id)
  }
}
