import { HttpRequest, HttpResponse, IController } from "../../../../../core/infrastucture/http/controller";
import { handleControllerError } from "../../../../../shared/utils/handle-controller-error";
import { IdSchema } from "../../../../../shared/validations/id-schema";
import { GetPartnerJobOppeningByIdUseCase } from "../../../application/use-cases/partner-job-oppening/get-partner-job-oppening-by-id.useCase";

export class GetPartnerJobOppeningByIdController implements IController<any> {
  constructor(private useCase: GetPartnerJobOppeningByIdUseCase) {}

  async handle(request: HttpRequest<any>): Promise<HttpResponse> {
    try {
      const { id } = IdSchema.parse(request.params);
      const response = await this.useCase.execute(id);

      if (response.isLeft()) throw response.value;

      return {
        statusCode: 200,
        body: response.value,
      };
    } catch (error) {
      return handleControllerError(error);
    }
  }
}
