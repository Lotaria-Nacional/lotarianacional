import { handleControllerError } from "../../../../shared/utils/handle-controller-error";
import { EditAgencyDTO, editAgencySchema } from "../validations/edit-agency.schema";
import { UpdateAgencyUseCase } from "../../application/use-cases/update-agency.useCase";
import { IController, HttpRequest, HttpResponse } from "../../../../core/infrastucture/http/controller";

export class UpdateAgencyController implements IController<EditAgencyDTO> {
  constructor(private useCase: UpdateAgencyUseCase) {}

  async handle(req: HttpRequest<EditAgencyDTO>): Promise<HttpResponse> {
    const { id } = req.params;

    try {
      const body = editAgencySchema.parse({ ...req.body, id });

      const updatedAgency = await this.useCase.execute(body);

      return {
        statusCode: 200,
        body: { message: "Atualizado com sucesso.", data: updatedAgency },
      };
    } catch (error) {
      return handleControllerError(error);
    }
  }
}
