import { IJobOppeningRepository } from "../interfaces/job-oppening.repository";
import { UpdateJobOppeningDTO } from "../../presentation/validation/update-job-oppening.schema";
import { Either } from "../../../../core/either/either";
import { NotFoundError } from "../../../../core/errors/common/not-found.error";
import { left, right } from "../../../../core/either/helpers";

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
