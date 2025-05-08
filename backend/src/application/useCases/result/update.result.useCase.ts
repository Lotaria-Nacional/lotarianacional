import { Result } from "../../../Domain/Entities/Result/Result";
import { NotFoundError } from "../../../shared/errors/notFound.error";
import { Emission } from "../../../Domain/Entities/emission/emission.entity";
import { IResultRepository } from "../../../Domain/Entities/Result/result.respository";
import { IEmissionRepository } from "../../../Domain/Entities/emission/emission.repository";

type UpdateResultInputDTO = {
  id: string;
  videoURL?: string;
};

export class UpdateResultUseCase {
  constructor(private resultRepository: IResultRepository, private emissionRepository: IEmissionRepository) {}

  async execute(data: UpdateResultInputDTO): Promise<Result> {
    const result = await this.resultRepository.getById(data.id);
    if (!result) throw new NotFoundError("Resultado não encontrado.");

    result.update(data);
    await this.resultRepository.update(data);

    if (data.videoURL) {
      const emission = Emission.create({
        description: result.name,
        url: data.videoURL,
      });
      await this.emissionRepository.save(emission);
    }

    return result;
  }

  private hasValidVideoURL(url: string | undefined | null) {
    return typeof url === "string";
  }
}
