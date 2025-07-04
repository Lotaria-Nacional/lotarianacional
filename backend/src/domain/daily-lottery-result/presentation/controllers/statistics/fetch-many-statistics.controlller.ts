import { HttpRequest, HttpResponse, IController } from "../../../../../core/infrastucture/http/controller"
import { FetchManyStatisticsUseCase } from "../../../application/use-cases/statistics/fetch-many-statistics.useCase"

export class FetchManyStatisticsController implements IController {
  constructor(private useCase: FetchManyStatisticsUseCase) {}

  async handle(_req: HttpRequest):Promise<HttpResponse> {
    try {
      const statistic = await this.useCase.execute()
      return {statusCode:200, body:statistic}
    } catch (error) {
      return { statusCode:500, body:{ error: "Erro no servidor." } }
    }
  }
}
