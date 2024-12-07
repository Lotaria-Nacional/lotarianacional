import { Agency } from "../../../Domain/Entities/Agency/Agency"
import { NotFoundError } from "../../../Shared/Errors/NotFoundError"
import { IAgencyRespository } from "../../../Domain/Entities/Agency/IAgencyRespository"

export class GetAgencyByIdUseCase {
  constructor(private agencyRepository: IAgencyRespository) {}

  async execute(id: string): Promise<Agency | null> {
    const agency = this.agencyRepository.getById(id)
    if (!agency) throw new NotFoundError("Agência não foi encontrada.")

    return agency
  }
}
