import { NotFoundError } from "@/core/errors/common/not-found.error"
import { ILotteryResultRepository } from "../../interfaces/lottery-result.respository"

export class DeleteLotteryResultUseCase {
  constructor(private resultRepository: ILotteryResultRepository) {}

  async execute(id: string): Promise<void> {
    const result = await this.resultRepository.getById(id)

    if (!result) throw new NotFoundError("Resultado não encontrado.")
    await this.resultRepository.delete(id)
  }
}
