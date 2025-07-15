import { HttpRequest, HttpResponse, IController } from "../../../../../core/infrastucture/http/controller";
import { handleControllerError } from "../../../../../shared/utils/handle-controller-error";
import { IdSchema } from "../../../../../shared/validations/id-schema";
import { UpdatePartnerJobOppeningUseCase } from "../../../application/use-cases/partner-job-oppening/update-partner-job-oppening.useCase";
import { updatePartnerJobOppeningSchema, UpdatePartnerJobOppeningDTO } from "../../validation/partner-job-oppening-schema/update-partner-job-oppening.schema";

export class UpdatePartnerJobOppeningController implements IController<UpdatePartnerJobOppeningDTO> {
  constructor(private useCase: UpdatePartnerJobOppeningUseCase) {}

  async handle(request: HttpRequest<UpdatePartnerJobOppeningDTO>): Promise<HttpResponse> {
    try {
      const { id } = IdSchema.parse(request.params);
      const body = updatePartnerJobOppeningSchema.parse({ ...request.body, id });

      await this.useCase.execute(body);
      return {
        statusCode: 200,
        body: { message: "A vaga foi atualizada" },
      };
    } catch (error) {
      return handleControllerError(error);
    }
  }
}
