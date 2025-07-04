import { NotFoundError } from "../../../../core/errors/common/not-found.error";
import { GetNewsByIdUseCase } from "../../application/use-cases/get-news-by-id.useCase";
import { HttpRequest, HttpResponse, IController } from "../../../../core/infrastucture/http/controller";

export class GetNewsByIdController implements IController {
  constructor(private useCase: GetNewsByIdUseCase) {}

  async handle(req: HttpRequest): Promise<HttpResponse> {
    try {
      const newsData = await this.useCase.execute(req.params.id);
      return { statusCode: 200, body: newsData };
    } catch (error) {
      if (error instanceof NotFoundError) {
        return { statusCode: 404, body: { message: error.message } };
      }
      return { statusCode: 500, body: { message: "Erro interno no servidor." } };
    }
  }
}
