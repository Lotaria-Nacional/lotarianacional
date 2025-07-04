import { IController, HttpRequest, HttpResponse } from "../../../../../core/infrastucture/http/controller"
import { FetchManyLotteryResultsUseCase } from "../../../application/use-cases/lottery-result/fetch-many-lottery-result.useCase"

export class FetchManyLotteryResultsController implements IController{
  constructor(private useCase: FetchManyLotteryResultsUseCase) {}

  async handle(_req: HttpRequest):Promise<HttpResponse> {
    try {
      const results = await this.useCase.execute()
      const total = results.length
      return { statusCode:200,body:{ results, total: total } }
    } catch (error: any) {
      return { statusCode:500,body:{ message: error.message } }
    }
  }
}
