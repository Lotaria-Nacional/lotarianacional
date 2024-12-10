import { NotFoundError } from "../../../shared/errors/notFound.error"
import { IResultRepository } from "../../../domain/entities/result/result.respository"

export class DeleteResultUseCase {
  constructor(private resultRepository: IResultRepository) {}

  async execute(id: string): Promise<void> {
    const result = await this.resultRepository.getById(id)

    if (!result) throw new NotFoundError("Resultado não encontrado.")
    await this.resultRepository.delete(id)
  }
}
