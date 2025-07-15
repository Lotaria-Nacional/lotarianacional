import { NotFoundError } from "../../../../../core/errors/common/not-found.error";
import { PartnerJobOppening } from "../../../enterprise/entities/partner-job-oppening";
import { IPartnerJobOppeningRepository } from "../../interfaces/partner-job-oppening.repository";

export class GetPartnerJobOppeningByIdUseCase {
  constructor(private repository: IPartnerJobOppeningRepository) {}

  async execute(id: string) {
    const existingJobOppening = await this.repository.getById(id);
    console.log("use case called");
    
    if (!existingJobOppening) {
      throw new NotFoundError("A vaga não foi encontrada");
    }

    await this.repository.getById(existingJobOppening.id);

    return existingJobOppening
  }
}
