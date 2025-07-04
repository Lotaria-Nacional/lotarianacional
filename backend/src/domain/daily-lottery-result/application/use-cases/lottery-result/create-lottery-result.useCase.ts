import { ILotteryResultRepository } from "../../interfaces/lottery-result.respository";
import { LotteryResult } from "../../../../../domain/daily-lottery-result/enterprise/entities/lottery-result";

export type CreateResultInputDTO = {
  name: string;
  hour: string;
  dailyId?: string;
  videoURL?: string | null;
  number_1: number;
  number_2: number;
  number_3: number;
  number_4: number;
  number_5: number;
};
export class CreateLotteryResultUseCase {
  constructor(private resultRepository: ILotteryResultRepository) {}

  async execute(data: CreateResultInputDTO): Promise<void> {
    const result = LotteryResult.create({
      hour: data.hour,
      name: data.name,
      videoURL: data.videoURL,
      number_1: data.number_1,
      number_2: data.number_2,
      number_3: data.number_3,
      number_4: data.number_4,
      number_5: data.number_5,
    });

    await this.resultRepository.save(result);
  }
}
