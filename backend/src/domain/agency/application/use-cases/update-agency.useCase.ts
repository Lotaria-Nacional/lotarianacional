import { NotFoundError } from "../../../../core/errors/notFound.error";
import { Agency } from "../../enterprise/entities/agency.entity";
import { IAgencyRespository } from "../interfaces/agency-respository.interface";


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

    const agency = await this.agencyRepository.save(id, data);
    return agency;
  }
}
