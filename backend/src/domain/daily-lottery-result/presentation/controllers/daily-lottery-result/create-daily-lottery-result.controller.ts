import { z } from "zod";
import { createDailyResultSchema } from "../../validations/daily-lottery-result-schema/create-daily-lottery-result.schemas";
import { CreateDailyResultUseCase } from "../../../application/use-cases/daily-lottery-result/create-daily-lottery-result.useCase";
import { IController, HttpRequest, HttpResponse } from "../../../../../core/infrastucture/http/controller";

export class CreateDailyResultsController implements IController {
  constructor(private createDailyResultUseCase: CreateDailyResultUseCase) {}

  async handle(req: HttpRequest): Promise<HttpResponse> {
    try {
      const body = createDailyResultSchema.parse(req.body);
      await this.createDailyResultUseCase.execute(body);

      return {
        statusCode: 201,
        body: { message: "Criado com sucesso." },
      };
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return {
          statusCode: 400,
          body: { message: error.errors[0].message },
        };
      }
      return {
        statusCode: 400,
        body: { message: error.message },
      };
    }
  }
}
