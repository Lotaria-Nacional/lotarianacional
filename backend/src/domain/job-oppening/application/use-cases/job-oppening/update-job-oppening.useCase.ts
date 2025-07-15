import { right } from "../../../../../core/either/helpers";
import { NotFoundError } from "../../../../../core/errors/common/not-found.error";
import { UpdateJobOppeningDTO } from "../../../presentation/validation/update-job-oppening.schema";
import { IJobOppeningRepository } from "../../interfaces/job-oppening.repository";

export class UpdateJobOppeningUseCase {
  constructor(private repository: IJobOppeningRepository) {}
  async execute(data: UpdateJobOppeningDTO) {
    const existingJobOppening = await this.repository.getById(data.id);
    if (!existingJobOppening) {
      throw new NotFoundError("A vaga não foi encontrada");
    }
    existingJobOppening.update(data);
    await this.repository.save(existingJobOppening);
    return right({});
  }
}
