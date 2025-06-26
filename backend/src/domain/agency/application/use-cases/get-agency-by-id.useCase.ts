import { NotFoundError } from "../../../../core/errors/notFound.error"
import { Agency } from "../../enterprise/entities/agency.entity"
import { IAgencyRespository } from "../interfaces/agency-respository.interface"

export class GetAgencyByIdUseCase {
  constructor(private agencyRepository: IAgencyRespository) {}

  async execute(id: string): Promise<Agency | null> {
    const agency = this.agencyRepository.getById(id)
    if (!agency) throw new NotFoundError("Agência não foi encontrada.")

    return agency
  }
}
