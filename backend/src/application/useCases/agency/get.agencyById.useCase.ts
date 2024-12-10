import { Agency } from "../../../domain/entities/agency/agency"
import { NotFoundError } from "../../../shared/errors/notFound.error"
import { IAgencyRespository } from "../../../domain/entities/agency/agency.respository"

export class GetAgencyByIdUseCase {
  constructor(private agencyRepository: IAgencyRespository) {}

  async execute(id: string): Promise<Agency | null> {
    const agency = this.agencyRepository.getById(id)
    if (!agency) throw new NotFoundError("Agência não foi encontrada.")

    return agency
  }
}
