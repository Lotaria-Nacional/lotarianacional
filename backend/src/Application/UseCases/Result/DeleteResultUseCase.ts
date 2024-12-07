import { NotFoundError } from "../../../Shared/Errors/NotFoundError"
import { IResultRepository } from "../../../Domain/Entities/Result/IResultRespository"

export class DeleteResultUseCase {
  constructor(private resultRepository: IResultRepository) {}

  async execute(id: string): Promise<void> {
    const result = await this.resultRepository.getById(id)

    if (!result) throw new NotFoundError("Resultado não encontrado.")
    await this.resultRepository.delete(id)
  }
}
