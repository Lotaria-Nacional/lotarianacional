import { Either } from "../../../../../core/either/either";
import { left, right } from "../../../../../core/either/helpers";
import { NotFoundError } from "../../../../../core/errors/common/not-found.error";
import { IPartnerJobOppeningRepository } from "../../interfaces/partner-job-oppening.repository";

export type DeletePartnerJobOppeningUseCaseResponse = Either<NotFoundError, {}>;

export class DeletePartnerJobOppeningUseCase {
  constructor(private repository: IPartnerJobOppeningRepository) {}

  async execute(id: string): Promise<DeletePartnerJobOppeningUseCaseResponse> {
    const existingPartnerJobOppening = await this.repository.getById(id);

    if (!existingPartnerJobOppening) {
      return left(new NotFoundError("A vaga não foi encontrada"));
    }

    await this.repository.delete(existingPartnerJobOppening.id);

    return right({});
  }
}
