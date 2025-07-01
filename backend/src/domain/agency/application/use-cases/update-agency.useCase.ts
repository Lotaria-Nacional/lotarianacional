import { NotFoundError } from "@/core/errors/common/not-found.error";
import { Agency } from "../../enterprise/entities/agency.entity";
import { IAgencyRespository } from "../interfaces/agency-respository.interface";
import { EditAgencyDTO } from "../../presentation/validations/edit-agency.schema";



export class UpdateAgencyUseCase {
  constructor(private agencyRepository: IAgencyRespository) {}

  async execute(data: EditAgencyDTO): Promise<Agency> {
    const existingAgency = await this.agencyRepository.getById(data.id);

    if (!existingAgency) new NotFoundError("Agência não encontrada.");

    const agency = await this.agencyRepository.save(data);
    return agency;
  }
}
