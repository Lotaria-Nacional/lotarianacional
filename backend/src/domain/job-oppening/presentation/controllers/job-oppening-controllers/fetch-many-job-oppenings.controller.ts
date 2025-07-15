import { IController, HttpRequest, HttpResponse } from "../../../../../core/infrastucture/http/controller";
import { handleControllerError } from "../../../../../shared/utils/handle-controller-error";
import { QuerySchema } from "../../../../../shared/validations/query-schema";
import { FetchManyJobOppeningsUseCase } from "../../../application/use-cases/job-oppening/fetch-many-job-oppenings.useCase";

export class FetchManyJobOppeningsController implements IController<any> {
  constructor(private useCase: FetchManyJobOppeningsUseCase) {}
  async handle(request: HttpRequest<any>): Promise<HttpResponse> {
    try {
      const { page, limit, slug } = QuerySchema.parse(request.query);

      const response = await this.useCase.execute({ page, limit, slug });

      return {
        statusCode: 200,
        body: response,
      };
    } catch (error) {
      return handleControllerError(error);
    }
  }
}
