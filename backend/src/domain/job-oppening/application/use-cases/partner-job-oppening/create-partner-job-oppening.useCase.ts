import { PartnerJobOppening } from "../../../enterprise/entities/partner-job-oppening";
import { CreatePartnerJobOppeningDTO } from "../../../presentation/validation/partner-job-oppening-schema/create-partner-job-oppening.schema";
import { IPartnerJobOppeningRepository } from "../../interfaces/partner-job-oppening.repository";

export class CreatePartnerJobOppeningUseCase {
  constructor(private repository: IPartnerJobOppeningRepository) {}

  async execute(data: CreatePartnerJobOppeningDTO): Promise<void> {
    const { location, type, requirements, quantity, responsabilities, title, description } = data;

    const partnerJobOppening = PartnerJobOppening.create({
      title,
      location,
      type,
      quantity,
      description,
      requirements,
      responsabilities,
    });

    await this.repository.create(partnerJobOppening);
  }
}
