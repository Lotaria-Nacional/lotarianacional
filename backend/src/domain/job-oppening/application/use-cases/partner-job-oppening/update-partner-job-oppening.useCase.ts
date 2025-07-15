import { IPartnerJobOppeningRepository } from "../../interfaces/partner-job-oppening.repository";
import { UpdatePartnerJobOppeningDTO } from "../../../presentation/validation/partner-job-oppening-schema/update-partner-job-oppening.schema";
import { NotFoundError } from "../../../../../core/errors/common/not-found.error";
import { right } from "../../../../../core/either/helpers";

export class UpdatePartnerJobOppeningUseCase {
  constructor(private repository: IPartnerJobOppeningRepository) {}

  async execute(data: UpdatePartnerJobOppeningDTO) {
    const existingJobOppening = await this.repository.getById(data.id);
    if (!existingJobOppening) {
      throw new NotFoundError("A vaga não foi encontrada");
    }
    existingJobOppening.update(data);
    await this.repository.save(existingJobOppening);
    return right({});
  }
}
