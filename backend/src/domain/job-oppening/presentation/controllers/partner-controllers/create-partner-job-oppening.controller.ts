import { HttpRequest, HttpResponse, IController } from "../../../../../core/infrastucture/http/controller";
import { handleControllerError } from "../../../../../shared/utils/handle-controller-error";
import { CreatePartnerJobOppeningUseCase } from "../../../application/use-cases/partner-job-oppening/create-partner-job-oppening.useCase";
import { createPartnerJobOppeningSchema, CreatePartnerJobOppeningDTO } from "../../validation/partner-job-oppening-schema/create-partner-job-oppening.schema";

export class CreatePartnerJobOppeningController implements IController<CreatePartnerJobOppeningDTO> {
  constructor(private useCase: CreatePartnerJobOppeningUseCase) {}

  async handle(request: HttpRequest<CreatePartnerJobOppeningDTO>, response?: HttpResponse): Promise<HttpResponse> {
    try {
      const body = createPartnerJobOppeningSchema.parse(request.body);
      await this.useCase.execute(body);
      return {
        statusCode: 201,
        body: { message: "Vaga adicionada com sucesso" },
      };
    } catch (error) {
      return handleControllerError(error);
    }
  }
}
