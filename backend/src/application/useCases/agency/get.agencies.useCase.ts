import { IAgenciesResponse, IAgencyRespository } from "../../../Domain/Entities/Agency/agency.respository";

type GetAgenciesInputDTO = {
  page: number;
  pageSize: number;
};

export class GetAgenciesUseCase {
  constructor(private agencyRespository: IAgencyRespository) {}

  async execute(data: GetAgenciesInputDTO): Promise<IAgenciesResponse | []> {
    const { page, pageSize } = data;
    try {
      const result = await this.agencyRespository.getAll(page, pageSize);
      return result;
    } catch (error) {
      console.log("GetAgenciesUseCase ~ execute ~ error", error);
      throw new Error("Erro ao recuperar agências. Tente novamente mais tarde.");
    } 
  }
}
