import { Result } from "../../../Domain/Entities/Result/Result"
import { IResultRepository } from "../../../Domain/Entities/Result/IResultRespository"

export class GetResultsUseCase {
  constructor(private resultRepository: IResultRepository) {}

  async execute(): Promise<Result[]> {
    const results = await this.resultRepository.getAll()
    if (results.length === 0) return []

    return results
  }
}
