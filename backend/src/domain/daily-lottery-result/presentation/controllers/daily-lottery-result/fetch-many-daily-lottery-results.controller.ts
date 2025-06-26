import { HttpRequest, HttpResponse, IController } from "../../../../../core/infrastucture/http/controller";
import { FetchManyDailyLotteryResultsUseCase } from "../../../application/use-cases/daily-lottery-result/fetch-manny-daily-lottery-result.useCase";

export class FetchManyDailyLotteryResultsController implements IController {
  constructor(private useCase: FetchManyDailyLotteryResultsUseCase) {}

  async handle(req: HttpRequest):Promise<HttpResponse> {
    try {
      const results = await this.useCase.execute();
      
      return {
        statusCode:200,
        body:results
      }
    } catch (error) {
      return {
        statusCode:500,
        body:{ message: "Error: " + error }
      }
    }
  }
}
