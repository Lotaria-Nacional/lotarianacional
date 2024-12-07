import { Result } from "../../../Domain/Entities/Result/Result"
import { IResultRepository } from "../../../Domain/Entities/Result/IResultRespository"

export type CreateResultInputDTO = {
  name: string
  hour: number
  minute: number
  sorted_number_1: number
  sorted_number_2: number
  sorted_number_3: number
  sorted_number_4: number
  sorted_number_5: number
}

export class CreateResultUseCase {
  constructor(private resultRepository: IResultRepository) {}

  async execute(data: CreateResultInputDTO) {
    const result = Result.create({
      name: data.name,
      hour: data.hour,
      minute: data.minute,
      sorted_number_1: data.sorted_number_1,
      sorted_number_2: data.sorted_number_2,
      sorted_number_3: data.sorted_number_3,
      sorted_number_4: data.sorted_number_4,
      sorted_number_5: data.sorted_number_5,
    })
    await this.resultRepository.save(result)
  }
}
