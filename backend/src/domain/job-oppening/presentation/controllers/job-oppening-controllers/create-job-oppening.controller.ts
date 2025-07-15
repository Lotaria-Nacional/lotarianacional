import { IController, HttpRequest, HttpResponse } from "../../../../../core/infrastucture/http/controller"
import { handleControllerError } from "../../../../../shared/utils/handle-controller-error"
import { CreateJobOppeningUseCase } from "../../../application/use-cases/job-oppening/create-job-oppening.useCase"
import { CreateJobOppeningDTO, createJobOppeningSchema } from "../../validation/create-job-oppening.schema"


export class CreateJobOppeningController implements IController<CreateJobOppeningDTO> {
    constructor(private useCase: CreateJobOppeningUseCase) { }

    async handle(request: HttpRequest<CreateJobOppeningDTO>, response?: HttpResponse): Promise<HttpResponse> {
        try {
            const body = createJobOppeningSchema.parse(request.body)
            await this.useCase.execute(body)
            return {
                statusCode:201,
                body:{ message:"Vaga adicionada com sucesso" },
            }
        } catch (error) {
            return handleControllerError(error)
        }

    }
}