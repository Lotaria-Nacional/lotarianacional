import { DeletePartnerJobOppeningUseCase } from "../../../application/use-cases/partner-job-oppening/delete-partner-job-oppening.useCase";
import { HttpRequest, HttpResponse, IController } from "../../../../../core/infrastucture/http/controller";
import { handleControllerError } from "../../../../../shared/utils/handle-controller-error";
import { IdSchema } from "../../../../../shared/validations/id-schema";

export class DeletePartnerJobOppeningController implements IController<any> {
  constructor(private useCase: DeletePartnerJobOppeningUseCase) {}

  async handle(request: HttpRequest<any>): Promise<HttpResponse> {
    try {
      const { id } = IdSchema.parse(request.params);

      const response = await this.useCase.execute(id);

      if (response.isLeft()) {
        throw response.value;
      }

      return {
        statusCode: 200,
        body: { message: "Vaga removida com sucesso" },
      };
    } catch (error) {
      return handleControllerError(error);
    }
  }
}
