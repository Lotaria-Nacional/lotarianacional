import { FetchManyNewsUseCase } from "../../application/use-cases/fetch-many-news.useCase";
import { HttpRequest, HttpResponse, IController } from "../../../../core/infrastucture/http/controller";

export class FetchManyNewsController implements IController {
  constructor(private useCase: FetchManyNewsUseCase) {}
  
  async handle(req: HttpRequest):Promise<HttpResponse> {

    const { page = 1, pageSize = 10 } = req.query;
    const parsedPage = parseInt(page as string, 10);
    const parsedPageSize = parseInt(pageSize as string, 10);

    try {
      const news = await this.useCase.execute({ page: parsedPage, pageSize: parsedPageSize });
      return { statusCode:200, body:news }
    } catch (error) {
      return { statusCode:500, body:{ message: "Erro interno no servidor." } }
    }
  }
}
