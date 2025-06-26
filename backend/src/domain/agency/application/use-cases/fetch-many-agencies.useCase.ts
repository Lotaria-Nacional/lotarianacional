import { Agency } from "../../enterprise/entities/agency.entity";
import { IAgencyRespository } from "../interfaces/agency-respository.interface";


export class FetchManyAgenciesUseCase {
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
