import { NotFoundError } from "../../../../core/errors/common/not-found.error";
import { GetAgencyByIdUseCase } from "../../application/use-cases/get-agency-by-id.useCase";
import { IController, HttpRequest, HttpResponse } from "../../../../core/infrastucture/http/controller";

export class GetAgencyByIdController implements IController {
  constructor(private useCase: GetAgencyByIdUseCase) {}

  async handle(req: HttpRequest): Promise<HttpResponse> {
    const { id } = req.params;
    try {
      const agency = await this.useCase.execute(id);

      return {
        statusCode: 200,
        body: agency,
      };
    } catch (error) {
      if (error instanceof NotFoundError) {
        return {
          statusCode: 404,
          body: { message: error.message },
        };
      }
      return {
        statusCode: 500,
        body: { message: "Erro interno no servidor." },
      };
    }
  }
}
