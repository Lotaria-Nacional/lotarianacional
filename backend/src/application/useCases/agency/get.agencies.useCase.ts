import { Agency } from "../../../Domain/Entities/Agency/Agency";
import { IAgencyRespository } from "../../../Domain/Entities/Agency/agency.respository";

export class GetAgenciesUseCase {
  constructor(private agencyRespository: IAgencyRespository) {}

  async execute(): Promise<Agency[]> {
    try {
      const result = await this.agencyRespository.getAll();
      return result;
    } catch (error) {
      console.log("GetAgenciesUseCase ~ execute ~ error", error);
      throw new Error("Erro ao recuperar agências. Tente novamente mais tarde.");
    } 
  }
}
