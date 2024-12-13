import { IDailyResultRespository } from "../../../Domain/Entities/dailyResults/dailyResult.repository"
import { NotFoundError } from "../../../shared/errors/notFound.error"

export class DeleteDailyResultUseCase {
  constructor(private dailyResultRepository: IDailyResultRespository) {}

  async execute(id: string) {
    const existingDailyResult = await this.dailyResultRepository.getById(id)
    if(!existingDailyResult) throw new NotFoundError("Resultado diário não encontrado.")
      await this.dailyResultRepository.delete(existingDailyResult.id!)
  }
}
