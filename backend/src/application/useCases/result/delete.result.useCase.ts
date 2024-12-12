import { NotFoundError } from "../../../shared/errors/notFound.error"
import { IResultRepository } from "../../../Domain/Entities/Result/result.respository"

export class DeleteResultUseCase {
  constructor(private resultRepository: IResultRepository) {}

  async execute(id: string): Promise<void> {
    const result = await this.resultRepository.getById(id)

    if (!result) throw new NotFoundError("Resultado não encontrado.")
    await this.resultRepository.delete(id)
  }
}
