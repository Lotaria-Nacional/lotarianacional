import { formatDate } from "../../../utils/date"
import { Result } from "../../../Domain/Entities/Result/Result"
import { CreateResultInputDTO } from "../result/create.result.useCase"
import { DailyResult } from "../../../Domain/Entities/dailyResults/dailyResult"
import { IDailyResultRespository } from "../../../Domain/Entities/dailyResults/dailyResult.repository"

export class CreateDailyResultUseCase {
  constructor(private dailyResultRespository: IDailyResultRespository) {}

  async execute(data: CreateResultInputDTO): Promise<void> {
    const today = new Date()

    try {
      let dailyResult = await this.dailyResultRespository.getLast()

      if (!dailyResult || this.isNewDailyResultRequired(dailyResult)) {
        dailyResult = this.createNewDailyResult(today, [
          this.createNewResult(data),
        ])
        await this.dailyResultRespository.save(dailyResult)
      } else {
        dailyResult.results.push(this.createNewResult(data))
        await this.dailyResultRespository.update(dailyResult)
      }
    } catch (error) {
      console.error("Erro ao criar o resultado do dia:", error)
      throw new Error("Não foi possível atualizar o resultado do dia.")
    }
  }

  private createNewDailyResult(date: Date, results: Result[]): DailyResult {
    return DailyResult.create({
      date,
      results,
      formatedDate: formatDate(date),
    })
  }

  private isNewDailyResultRequired(dailyResult: DailyResult): boolean {
    return dailyResult.results.length >= 4
  }

  private createNewResult(data: CreateResultInputDTO): Result {
    return Result.create({
      name: data.name,
      hour: data.hour,
      dailyId: data.dailyId,
      number_1: data.number_1,
      number_2: data.number_2,
      number_3: data.number_3,
      number_4: data.number_4,
      number_5: data.number_5,
    })
  }
}
