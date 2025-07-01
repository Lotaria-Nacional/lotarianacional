import { LotteryResult } from "../../../enterprise/entities/lottery-result"
import { DailyLotteryResult } from "../../../enterprise/entities/daily-lottery-result"
import { IDailyLotteryResultRespository } from "../../interfaces/daily-lottery-result.repository"
import { NotFoundError } from "@/core/errors/common/not-found.error"

export class GetLastDailyResultUseCase {
  constructor(private dailyResultRepository: IDailyLotteryResultRespository) {}

  async execute(): Promise<DailyLotteryResult> {
    const lastDailyResult = await this.dailyResultRepository.getLast()
    if (!lastDailyResult) {
      throw new NotFoundError("Não há resultados ainda.")
    }
    const dailyResult = this.createDailyResult(lastDailyResult)
    return dailyResult
  }

  private createDailyResult(data: DailyLotteryResult) {
    return DailyLotteryResult.create({
      id: data.id,
      date: data.date,
      createdAt: data.createdAt,
      formatedDate: data.formatedDate,
      results: data.results.map((result) =>
        LotteryResult.create({
          id: result.id,
          hour: result.hour,
          name: result.name,
          dailyId: result.dailyId,
          number_1: result.number_1,
          videoURL: result.videoURL,
          number_2: result.number_2,
          number_3: result.number_3,
          number_4: result.number_4,
          number_5: result.number_5,
          createdAt: result.createdAt,
        })
      ),
    })
  }
}
