import { DailyResult } from "../../../domain/entities/dailyResults/dailyResult"
import { IDailyResultRespository } from "../../../domain/entities/dailyResults/dailyResult.repository"
// import { Result } from "../../../domain/entities/result/result"
// import { IResultRepository } from "../../../domain/entities/result/result.respository"

export class GetResultsUseCase {
  constructor(private dailyResultRepository: IDailyResultRespository) {}

  async execute(): Promise<DailyResult[]> {
    const results = await this.dailyResultRepository.getAll()
    if (results.length === 0) return []

    return results
  }
}
