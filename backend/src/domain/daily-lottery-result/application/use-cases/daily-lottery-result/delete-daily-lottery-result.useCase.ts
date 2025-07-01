import { NotFoundError } from "@/core/errors/common/not-found.error"
import { IDailyLotteryResultRespository } from "../../interfaces/daily-lottery-result.repository"

export class DeleteDailyResultUseCase {
  constructor(private dailyResultRepository: IDailyLotteryResultRespository) {}

  async execute(id: string) {
    const existingDailyResult = await this.dailyResultRepository.getById(id)

    if (!existingDailyResult) {
      throw new NotFoundError("Resultado diário não encontrado.")
    }

    await this.dailyResultRepository.delete(existingDailyResult.id!)
  }
}
