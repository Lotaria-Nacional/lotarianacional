import { IController, HttpRequest, HttpResponse } from "../../../../../core/infrastucture/http/controller"
import { handleControllerError } from "../../../../../shared/utils/handle-controller-error"
import { IdSchema } from "../../../../../shared/validations/id-schema"
import { DeleteJobOppeningUseCase } from "../../../application/use-cases/job-oppening/delete-job-oppening.useCase"


export class DeleteJobOppeningController implements IController<any> {
    constructor(private useCase:DeleteJobOppeningUseCase){}

    async handle(request: HttpRequest<any>): Promise<HttpResponse> {
          
        try {
            const { id } = IdSchema.parse(request.params)

         await this.useCase.execute(id)
            
            return {
                statusCode:200,
                body:{ message:"Vaga removida com sucesso" }
            }
          } catch (error) {
            return handleControllerError(error)
        }
    }
}