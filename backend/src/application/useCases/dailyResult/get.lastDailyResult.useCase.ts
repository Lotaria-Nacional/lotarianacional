import { Result } from "../../../Domain/Entities/Result/Result"
import { NotFoundError } from "../../../shared/errors/notFound.error"
import { DailyResult } from "../../../Domain/Entities/dailyResults/dailyResult"
import { IDailyResultRespository } from "../../../Domain/Entities/dailyResults/dailyResult.repository"

export class GetLastDailyResultUseCase {
  constructor(private dailyResultRepository: IDailyResultRespository) {}

  async execute(): Promise<DailyResult> {
    const lastDailyResult = await this.dailyResultRepository.getLast()
    if (!lastDailyResult) {
      throw new NotFoundError("Não há resultados ainda.")
    }
    const dailyResult = this.createDailyResult(lastDailyResult)
    return dailyResult
  }

  private createDailyResult(data: DailyResult) {
    return DailyResult.create({
      id: data.id,
      date: data.date,
      createdAt: data.createdAt,
      formatedDate: data.formatedDate,
      results: data.results.map((result) =>
        Result.create({
          id: result.id,
          hour: result.hour,
          name: result.name,
          dailyId: result.dailyId,
          number_1: result.number_1,
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
