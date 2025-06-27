import { NotFoundError } from "@/core/errors/notFound.error";
import { IEmissionRepository } from "../../interfaces/emission.repository";
import { ILotteryResultRepository } from "../../interfaces/lottery-result.respository";
import { Emission } from "@/domain/daily-lottery-result/enterprise/entities/emission.entity";
import { LotteryResult } from "@/domain/daily-lottery-result/enterprise/entities/lottery-result";

type UpdateResultInputDTO = {
  id: string;
  videoURL?: string;
};

export class UpdateLotteryResultUseCase {
  constructor(private resultRepository: ILotteryResultRepository, private emissionRepository: IEmissionRepository) {}

  async execute(data: UpdateResultInputDTO): Promise<LotteryResult> {
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
