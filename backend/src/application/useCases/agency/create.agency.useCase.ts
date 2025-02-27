import { Agency } from "../../../Domain/Entities/Agency/Agency";
import { IAgencyRespository } from "../../../Domain/Entities/Agency/agency.respository";

type CreateAgencyInputDTO = {
  name: string;
  phone: number;
  latitude: number;
  type: string;
  longitude: number;
  location_text: string;
};

export class CreateAgencyUseCase {
  constructor(private agencyRepository: IAgencyRespository) {}

  async execute(data: CreateAgencyInputDTO) {
    const agency = Agency.create({
      name: data.name,
      latitude: data.latitude,
      longitude: data.longitude,
      location_text: data.location_text,
      type: data.type,
      phone: data.phone,
    });

    await this.agencyRepository.save(agency);
  }
}
