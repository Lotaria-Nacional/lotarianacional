import { Agency } from "../../../Domain/Entities/Agency/Agency"
import { IAgencyRespository } from "../../../Domain/Entities/Agency/agency.respository"

export class GetAgenciesUseCase {
  constructor(private agencyRespository: IAgencyRespository) {}

  async execute(): Promise<Agency[] | []> {
    const results = await this.agencyRespository.getAll()

    return results
  }
}
