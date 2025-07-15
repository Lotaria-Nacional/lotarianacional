import { HttpRequest, HttpResponse, IController } from "../../../../../core/infrastucture/http/controller";
import { handleControllerError } from "../../../../../shared/utils/handle-controller-error";
import { QuerySchema } from "../../../../../shared/validations/query-schema";
import { FetchManyPartnerJobOppeningsUseCase } from "../../../application/use-cases/partner-job-oppening/fetch-many-partner-job-oppenings.useCase";

export class FetchManyPartnerJobOppeningsController implements IController<any> {
  constructor(private useCase: FetchManyPartnerJobOppeningsUseCase) {}
  async handle(request: HttpRequest<any>): Promise<HttpResponse> {
    try {
      const { page, limit } = QuerySchema.parse(request.query);

      const response = await this.useCase.execute({ page, limit });

      return {
        statusCode: 200,
        body: response,
      };
    } catch (error) {
      return handleControllerError(error);
    }
  }
}
