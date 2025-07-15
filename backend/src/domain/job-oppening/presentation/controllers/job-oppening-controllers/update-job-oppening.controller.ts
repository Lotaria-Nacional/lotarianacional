import { IController, HttpRequest, HttpResponse } from "../../../../../core/infrastucture/http/controller";
import { handleControllerError } from "../../../../../shared/utils/handle-controller-error";
import { IdSchema } from "../../../../../shared/validations/id-schema";
import { UpdateJobOppeningUseCase } from "../../../application/use-cases/job-oppening/update-job-oppening.useCase";
import { UpdateJobOppeningDTO, updateJobOppeningSchema } from "../../validation/update-job-oppening.schema";

export class UpdateJobOppeningController implements IController<UpdateJobOppeningDTO> {
  constructor(private useCase: UpdateJobOppeningUseCase) {}

  async handle(request: HttpRequest<UpdateJobOppeningDTO>): Promise<HttpResponse> {
    try {
      const { id } = IdSchema.parse(request.params);
      const body = updateJobOppeningSchema.parse({ ...request.body, id });

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
