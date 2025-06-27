import { Agency } from "../../enterprise/entities/agency.entity";
import { IAgencyRespository } from "../interfaces/agency-respository.interface";
import { CreateAgencyDTO } from "../../presentation/validations/create-agency.schema";

export class CreateAgencyUseCase {
  constructor(private agencyRepository: IAgencyRespository) {}

  async execute(data: CreateAgencyDTO) {
    const agency = Agency.create({
      name: data.name,
      latitude: data.latitude,
      longitude: data.longitude,
      location_text: data.location_text,
      type: data.type,
      phone: data.phone,
    });

    await this.agencyRepository.create(agency);
  }
}
