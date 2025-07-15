import { IPartnerJobOppeningRepository } from "../../interfaces/partner-job-oppening.repository";
import { Either } from "../../../../../core/either/either";
import { NotFoundError } from "../../../../../core/errors/common/not-found.error";
import { left, right } from "../../../../../core/either/helpers";
import { PartnerJobOppening } from "../../../enterprise/entities/partner-job-oppening";

export type GetParnterJobOppeningByIdResponse = Either<NotFoundError, { partnerJobOppening: PartnerJobOppening }>;

export class GetPartnerJobOppeningByIdUseCase {
  constructor(private repository: IPartnerJobOppeningRepository) {}

  async execute(id: string): Promise<GetParnterJobOppeningByIdResponse> {
    const existingJobOppening = await this.repository.getById(id);

    if (!existingJobOppening) {
      return left(new NotFoundError("A vaga não foi encontrada"));
    }

    await this.repository.getById(existingJobOppening.id);

    return right({
      partnerJobOppening: existingJobOppening,
    });
  }
}
