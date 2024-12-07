import { Result } from "../../../Domain/Entities/Result/Result"
import { NotFoundError } from "../../../Shared/Errors/NotFoundError"
import { IResultRepository } from "../../../Domain/Entities/Result/IResultRespository"

type UpdateResultInputDTO = {
  sorted_number_1?: number
  sorted_number_2?: number
  sorted_number_3?: number
  sorted_number_4?: number
  sorted_number_5?: number
}

export class UpdateResultUseCase {
  constructor(private resultRepository: IResultRepository) {}

  async execute(id: string, data: UpdateResultInputDTO): Promise<Result> {
    const result = await this.resultRepository.getById(id)
    if (!result) throw new NotFoundError("Resultado não encontrado.")

    result.update(data)
    this.resultRepository.update(id, result)
    return result
  }
}
