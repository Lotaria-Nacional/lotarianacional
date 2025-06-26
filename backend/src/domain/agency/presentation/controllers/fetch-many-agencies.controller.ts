import { FetchManyAgenciesUseCase } from "../../application/use-cases/fetch-many-agencies.useCase";
import { HttpRequest, HttpResponse, IController } from "../../../../core/infrastucture/http/controller";

export class FetchManyAgenciesController implements IController{
  constructor(private useCase: FetchManyAgenciesUseCase) {}

  async handle(req: HttpRequest):Promise<HttpResponse> {
    try {
      const agencies = await this.useCase.execute();

      return {
        statusCode:200,
        body:agencies
      }
    } catch (error: any) {
      return {
        statusCode:500,
        body:{ message: error.message }
      }
    }
  }
}
