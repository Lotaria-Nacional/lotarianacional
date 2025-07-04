import { NotFoundError } from "../../../../../core/errors/common/not-found.error";
import { IController, HttpRequest, HttpResponse } from "../../../../../core/infrastucture/http/controller";
import { GetLastDailyResultUseCase } from "../../../application/use-cases/daily-lottery-result/get-last-daily-lottery-result.useCase";

export class GetLastDailyResultController implements IController {
  constructor(private getLastDailyResultUseCase: GetLastDailyResultUseCase) {}

  async handle(req: HttpRequest): Promise<HttpResponse> {
    try {
      const lastDailyResult = await this.getLastDailyResultUseCase.execute();
      return { statusCode: 200, body: lastDailyResult };
    } catch (error) {
      if (error instanceof NotFoundError) {
        return { statusCode: 404, body: { message: error.message } };
      }
      return { statusCode: 500, body: { message: "Erro interno no servidor.", error: error } };
    }
  }
}
