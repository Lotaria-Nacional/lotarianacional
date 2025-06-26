import { LotteryResult } from "../../../enterprise/entities/lottery-result"
import { ILotteryResultRepository } from "../../interfaces/lottery-result.respository"

export class FetchManyLotteryResultsUseCase {
  constructor(private resultRespository: ILotteryResultRepository) {}

  async execute(): Promise<LotteryResult[]> {
    const results = await this.resultRespository.getAll()

    return results.map((result) =>
      LotteryResult.create({
        id: result.id,
        hour: result.hour,
        name: result.name,
        videoURL: result.videoURL,
        number_1: result.number_1,
        number_2: result.number_2,
        number_3: result.number_3,
        number_4: result.number_4,
        number_5: result.number_5,
      })
    )
  }
}
