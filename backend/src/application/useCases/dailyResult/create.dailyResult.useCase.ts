import { DailyResult } from "../../../Domain/Entities/dailyResults/dailyResult"
import { IDailyResultRespository } from "../../../Domain/Entities/dailyResults/dailyResult.repository"
import { Result } from "../../../Domain/Entities/Result/Result"
import { formatDate } from "../../../utils/date"
import { CreateResultInputDTO } from "../result/create.result.useCase"

export class CreateDailyResultUseCase {
  constructor(private dailyResultRespository: IDailyResultRespository) {}

  async execute(data: CreateResultInputDTO) {
    const today = new Date().toISOString().split("T")[0]

    // Obtém o dailyResult do dia atual
    let dailyResult: DailyResult | null =
      await this.dailyResultRespository.getLast()

    // Se não houver dailyResult para o dia, cria um novo
    if (!dailyResult) {
      dailyResult = {
        date: new Date(today),
        formatedDate: formatDate(new Date(today)),
        results: [],
      }
    }

    // Se o número de resultados atingir 4, cria um novo dailyResult
    if (dailyResult.results.length >= 4) {
      // Cria um novo dailyResult
      const newDailyResult = DailyResult.create({
        date: new Date(today),
        results: [this.createNewResult(data)], // O novo resultado é o primeiro do novo dailyResult
        formatedDate: formatDate(new Date(today)),
      })

      // Salva o novo dailyResult
      await this.dailyResultRespository.save(newDailyResult)
    } else {
      // Caso contrário, adiciona o resultado no dailyResult existente
      dailyResult.results.push(this.createNewResult(data))

      // Atualiza o dailyResult
      if (dailyResult.id) {
        await this.dailyResultRespository.update(dailyResult)
      } else {
        await this.dailyResultRespository.save(dailyResult)
      }
    }
  }

  // Método para criar um novo resultado
  private createNewResult(data: CreateResultInputDTO): Result {
    return Result.create({
      name: data.name,
      hour: data.hour,
      number_1: data.number_1,
      number_2: data.number_2,
      number_3: data.number_3,
      number_4: data.number_4,
      number_5: data.number_5,
    })
  }
}
