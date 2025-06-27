import { z } from "zod";
import { NotFoundError } from "@/core/errors/notFound.error";
import { ResultLimitException } from "../../../exceptions/resultLimitExceeded.exception";
import { HttpRequest, HttpResponse, IController } from "@/core/infrastucture/http/controller";
import { CreateLotteryResultUseCase } from "../../../application/use-cases/lottery-result/create-lottery-result.useCase";

export class CreateLotteryResultController implements IController {
  constructor(private useCase: CreateLotteryResultUseCase) {}

  async handle(req: HttpRequest):Promise<HttpResponse> {
    const createResultSchema = z.object({
      name: z.string(),
      hour: z.string(),
      videoURL: z.string(),
      number_1: z.number(),
      number_2: z.number(),
      number_3: z.number(),
      number_4: z.number(),
      number_5: z.number(),
    });
    try {
      const resultData = createResultSchema.parse(req.body);

      await this.useCase.execute(resultData);

      return {statusCode:201, body:{ message: "Criado com sucesso." }};
    } catch (error) {
      if (error instanceof z.ZodError) {
        return {statusCode: 400, body:{ message: error.errors[0].message }};
      }
      if (error instanceof ResultLimitException) {
        return {statusCode: 400, body:{ message: error.message }};
      }
      if (error instanceof NotFoundError) {
        return {statusCode: 404, body:{ message: error.message }};
      }
      return {statusCode: 500, body:{ message: "Erro interno do servidor...", error: error }};
    }
  }
}
