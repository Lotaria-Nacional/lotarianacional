import { FetchManyEmissionUseCase } from "../../../application/use-cases/emission/fetch-many-emissionUseCase";
import { HttpRequest, HttpResponse, IController } from "@/core/infrastucture/http/controller";

export class FetchManyEmissionsController implements IController{
  constructor(private useCase: FetchManyEmissionUseCase) {}

  async handle(_req: HttpRequest):Promise<HttpResponse> {
    try {
      const emissions = await this.useCase.execute();
      return {statusCode:200, body:emissions};
    } catch (error) {
      return {statusCode:500, body:{ error, message: "error: " + error }};
    }
  }
}
