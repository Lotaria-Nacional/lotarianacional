import { Result } from "../../../Domain/Entities/Result/Result";
import { DailyResult } from "../../../Domain/Entities/dailyResults/dailyResult";
import { IDailyResultRespository } from "../../../Domain/Entities/dailyResults/dailyResult.repository";

export class GetAllDailyResultsUseCase {
  constructor(private dailyResultsRepository: IDailyResultRespository) {}

  async execute() {
    const results = await this.dailyResultsRepository.getAll();

    return results.map((result) =>
      DailyResult.create({
        id: result.id,
        date: result.date,
        createdAt: result.createdAt,
        formatedDate: result.formatedDate,
        results: result.results.map((res) =>
          Result.create({
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
          })
        ),
      })
    );
  }
}
