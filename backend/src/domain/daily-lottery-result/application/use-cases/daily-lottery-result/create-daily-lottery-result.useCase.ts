import { formatDate } from "../../../../../core/utils/date";
import { Emission } from "../../../enterprise/entities/emission.entity";
import { LotteryResult } from "../../../enterprise/entities/lottery-result";
import { IEmissionRepository } from "../../interfaces/emission.repository";
import { NumberStatisticService } from "../statistics/create-statistics.useCase";
import { CreateResultInputDTO } from "../lottery-result/create-lottery-result.useCase";
import { DailyLotteryResult } from "../../../enterprise/entities/daily-lottery-result";
import { IDailyLotteryResultRespository } from "../../interfaces/daily-lottery-result.repository";

export class CreateDailyResultUseCase {
  constructor(private dailyResultRepo: IDailyLotteryResultRespository,
    private emissionRepo: IEmissionRepository,
    private numberStatisticService: NumberStatisticService
  ) {}

  async execute(data: CreateResultInputDTO): Promise<void> {
    const today = new Date();

    try {
      let dailyResult = await this.dailyResultRepo.getLast();
      const newResult = this.buildResult(data);

      if (!dailyResult || this.shouldCreateNewDailyResult(dailyResult)) {
        dailyResult = this.buildNewDailyResult(today, [newResult]);
        await this.dailyResultRepo.create(dailyResult);
      } else {
        this.ensureResultIsUnique(dailyResult, data.name);
        dailyResult.results.push(newResult);
        await this.dailyResultRepo.save(dailyResult);
      }

      if (this.hasValidVideoURL(data.videoURL)) {
        await this.saveEmission(data.name, data.videoURL!);
      }

      await this.numberStatisticService.computeAndSaveStats();

    } catch (error) {
      console.error("Erro ao criar o resultado do dia:", error);
      throw error;
    }
  }

  private shouldCreateNewDailyResult(dailyResult: DailyLotteryResult): boolean {
    return dailyResult.results.length >= 4;
  }

  private ensureResultIsUnique(dailyResult: DailyLotteryResult, name: string): void {
    const exists = dailyResult.results.some((result) => result.name === name);
    if (exists) {
      throw new Error("Este resultado já foi inserido.");
    }
  }

  private buildNewDailyResult(date: Date, results: LotteryResult[]): DailyLotteryResult {
    return DailyLotteryResult.create({
      date,
      results,
      formatedDate: formatDate(date),
    });
  }

  private buildResult(data: CreateResultInputDTO): LotteryResult {
    return LotteryResult.create({
      name: data.name,
      hour: data.hour,
      videoURL: data.videoURL,
      dailyId: data.dailyId,
      number_1: data.number_1,
      number_2: data.number_2,
      number_3: data.number_3,
      number_4: data.number_4,
      number_5: data.number_5,
    });
  }

  private hasValidVideoURL(url: string | undefined | null): url is string {
    return typeof url === "string" && url.trim().length > 0;
  }

  private async saveEmission(description: string, url: string): Promise<void> {
    const emission = Emission.create({ description, url });
    await this.emissionRepo.save(emission);
  }
}
