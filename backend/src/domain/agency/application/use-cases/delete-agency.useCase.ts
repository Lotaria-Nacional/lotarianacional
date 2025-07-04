import { NotFoundError } from "../../../../core/errors/common/not-found.error";
import { IAgencyRespository } from "../interfaces/agency-respository.interface";

export class DeleteAgencyUseCase {
  constructor(private agencyRepository: IAgencyRespository) {}

  async execute(id: string) {
    const existingAgency = await this.agencyRepository.getById(id);
    if (!existingAgency) throw new NotFoundError("Agência não encontrada.");
    await this.agencyRepository.delete(id);
  }
}
