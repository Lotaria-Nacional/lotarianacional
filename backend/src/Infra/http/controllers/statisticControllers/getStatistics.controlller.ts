import { Request, Response } from "express"
import { GetStatisticUseCase } from "../../../../application/useCases/statistic/getStatistics.useCase"

export class GetStatisticsController {
  constructor(private statisticsRepository: GetStatisticUseCase) {}

  async handle(_req: Request, res: Response) {
    try {
      const statistic = await this.statisticsRepository.execute()
      return res.status(200).json(statistic)
    } catch (error) {
      return res.status(500).json({ error: "Erro no servidor." })
    }
  }
}
