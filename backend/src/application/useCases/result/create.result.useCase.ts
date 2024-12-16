import { Result } from "../../../Domain/Entities/Result/Result"
import { IResultRepository } from "../../../Domain/Entities/Result/result.respository"

export type CreateResultInputDTO = {
  name: string
  hour: string
  dailyId: string
  number_1: number
  number_2: number
  number_3: number
  number_4: number
  number_5: number
}
export class CreateResultUseCase {
  constructor(private resultRepository: IResultRepository) {}

  async execute(data: CreateResultInputDTO): Promise<void> {
    const result = Result.create({
      hour: data.hour,
      name: data.name,
      number_1: data.number_1,
      number_2: data.number_2,
      number_3: data.number_3,
      number_4: data.number_4,
      number_5: data.number_5,
    })

    await this.resultRepository.save(result)
  }
}
