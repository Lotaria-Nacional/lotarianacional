import { JobOppening } from "../../enterprise/entities/job-oppening";
import { IJobOppeningRepository } from "../interfaces/job-oppening.repository";
import { CreateJobOppeningDTO } from "../../presentation/validation/create-job-oppening.schema";

export class CreateJobOppeningUseCase {
  constructor(private repository: IJobOppeningRepository) {}

  async execute(data: CreateJobOppeningDTO): Promise<void> {
    const { department, requirements, quantity, responsabilities, title, description } = data;

    const jobOppening = JobOppening.create({
      title,
      department,
      quantity,
      description,
      requirements,
      responsabilities,
    });

    await this.repository.create(jobOppening);
  }
}
