import { Agency } from "../../../domain/entities/agency/agency"
import { NotFoundError } from "../../../shared/errors/notFound.error"
import { IAgencyRespository } from "../../../domain/entities/agency/agency.respository"

type UpdateAgencyInputDTO = {
  name?: string
  phone?: number
  latitude?: number
  longitude?: number
  location_text?: string
}

export class UpdateAgencyUseCase {
  constructor(private agencyRepository: IAgencyRespository) {}

  async execute(id: string, data: UpdateAgencyInputDTO): Promise<Agency> {
    const existingAgency = await this.agencyRepository.getById(id)
    if (!existingAgency) new NotFoundError("Agência não encontrada.")
  
    const agency = await this.agencyRepository.update(id, data)
    return agency
  }
}
