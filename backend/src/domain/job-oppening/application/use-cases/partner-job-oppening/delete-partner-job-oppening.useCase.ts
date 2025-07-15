import { Either } from "../../../../../core/either/either";
import { NotFoundError } from "../../../../../core/errors/common/not-found.error";
import { IPartnerJobOppeningRepository } from "../../interfaces/partner-job-oppening.repository";

export type DeletePartnerJobOppeningUseCaseResonse = Either<NotFoundError, {}>;

export class DeletePartnerJobOppeningUseCase {
  constructor(private repository: IPartnerJobOppeningRepository) {}

  async execute(id: string) {
    const existingPartnerJobOppening = await this.repository.getById(id);

    if (!existingPartnerJobOppening) {
     throw new NotFoundError("A vaga não foi encontrada");
    }

    await this.repository.delete(existingPartnerJobOppening.id);

  }
}
