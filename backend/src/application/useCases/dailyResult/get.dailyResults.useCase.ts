import { Result } from "../../../Domain/Entities/Result/Result"
import { DailyResult } from "../../../Domain/Entities/dailyResults/dailyResult"
import { IDailyResultRespository } from "../../../Domain/Entities/dailyResults/dailyResult.repository"

export class GetDailyResultsUseCase {
  constructor(private dailyResultRepository: IDailyResultRespository) {}

  async execute() {
    const dailyResults = await this.dailyResultRepository.getAll()

    return dailyResults.map((dailyRes) =>
      DailyResult.create({
        id: dailyRes.id,
        date: dailyRes.date,
        createdAt: dailyRes.createdAt,
        formatedDate: dailyRes.formatedDate,
        results: dailyRes.results.map((res) =>
          Result.create({
            hour: res.hour,
            name: res.name,
            number_1: res.number_1,
            number_2: res.number_2,
            number_3: res.number_3,
            number_4: res.number_4,
            number_5: res.number_5,
          })
        ),
      })
    )
  }
}
