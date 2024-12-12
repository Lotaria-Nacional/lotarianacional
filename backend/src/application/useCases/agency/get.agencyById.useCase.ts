import { Agency } from "../../../Domain/Entities/Agency/Agency"
import { NotFoundError } from "../../../shared/errors/notFound.error"
import { IAgencyRespository } from "../../../Domain/Entities/Agency/agency.respository"

export class GetAgencyByIdUseCase {
  constructor(private agencyRepository: IAgencyRespository) {}

  async execute(id: string): Promise<Agency | null> {
    const agency = this.agencyRepository.getById(id)
    if (!agency) throw new NotFoundError("Agência não foi encontrada.")

    return agency
  }
}
