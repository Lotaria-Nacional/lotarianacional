import { Agency } from "../../../Domain/Entities/Agency/Agency";
import { NotFoundError } from "../../../shared/errors/notFound.error";
import { IAgencyRespository } from "../../../Domain/Entities/Agency/agency.respository";

type UpdateAgencyInputDTO = {
  name?: string;
  type?: string;
  phone?: number;
  latitude?: number;
  longitude?: number;
  location_text?: string;
};

export class UpdateAgencyUseCase {
  constructor(private agencyRepository: IAgencyRespository) {}

  async execute(id: string, data: UpdateAgencyInputDTO): Promise<Agency> {
    const existingAgency = await this.agencyRepository.getById(id);
    if (!existingAgency) new NotFoundError("Agência não encontrada.");

    const agency = await this.agencyRepository.update(id, data);
    return agency;
  }
}
