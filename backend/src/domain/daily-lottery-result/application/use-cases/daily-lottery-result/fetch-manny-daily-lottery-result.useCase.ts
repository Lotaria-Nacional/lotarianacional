import { LotteryResult } from "../../../../../domain/daily-lottery-result/enterprise/entities/lottery-result";
import { IDailyLotteryResultRespository } from "../../interfaces/daily-lottery-result.repository";
import { DailyLotteryResult } from "../../../../../domain/daily-lottery-result/enterprise/entities/daily-lottery-result";

export class FetchManyDailyLotteryResultsUseCase {
  constructor(private dailyResultsRepository: IDailyLotteryResultRespository) {}

  async execute() {
    const results = await this.dailyResultsRepository.fetchMany();

    return results.map((result) =>
      DailyLotteryResult.create({
        id: result.id,
        date: result.date,
        createdAt: result.createdAt,
        formatedDate: result.formatedDate,
        results: result.results.map((res) =>
          LotteryResult.create({
            id: res.id,
            hour: res.hour,
            name: res.name,
            dailyId: res.dailyId,
            number_1: res.number_1,
            number_2: res.number_2,
            number_3: res.number_3,
            number_4: res.number_4,
            number_5: res.number_5,
            videoURL: res.videoURL,
            createdAt: res.createdAt,
          }),
        ),
      }),
    );
  }
}
