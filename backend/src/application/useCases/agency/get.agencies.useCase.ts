import { Agency } from "../../../domain/entities/agency/agency"
import { IAgencyRespository } from "../../../domain/entities/agency/agency.respository"

export class GetAgenciesUseCase {
  constructor(private agencyRespository: IAgencyRespository) {}

  async execute(): Promise<Agency[] | []> {
    const results = await this.agencyRespository.getAll()

    return results
  }
}
