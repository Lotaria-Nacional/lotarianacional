import { handleControllerError } from "../../../../shared/utils/handle-controller-error";
import { CreateAgencyUseCase } from "../../application/use-cases/create-agency.useCase";
import { CreateAgencyDTO, createAgencySchema } from "../validations/create-agency.schema";
import { HttpRequest, HttpResponse, IController } from "../../../../core/infrastucture/http/controller";

export class CreateAgencyController implements IController<CreateAgencyDTO> {
  constructor(private useCase: CreateAgencyUseCase) {}

  async handle(req: HttpRequest<CreateAgencyDTO>): Promise<HttpResponse> {
    try {
      const body = createAgencySchema.parse(req.body);
      await this.useCase.execute(body);

      return {
        statusCode: 201,
        body: { message: "Criado com sucesso." },
      };
    } catch (error) {
      return handleControllerError(error);
    }
  }
}
