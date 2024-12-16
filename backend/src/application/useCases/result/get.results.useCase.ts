import { Result } from "../../../Domain/Entities/Result/Result"
import { IResultRepository } from "../../../Domain/Entities/Result/result.respository"

export class GetResultsUseCase {
  constructor(private resultRespository: IResultRepository) {}

  async execute(): Promise<Result[]> {
    const results = await this.resultRespository.getAll()

    return results.map((result) =>
      Result.create({
        id: result.id,
        hour: result.hour,
        name: result.name,
        number_1: result.number_1,
        number_2: result.number_2,
        number_3: result.number_3,
        number_4: result.number_4,
        number_5: result.number_5,
      })
    )
  }
}
