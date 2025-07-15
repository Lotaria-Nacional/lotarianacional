import { IController, HttpRequest, HttpResponse } from "../../../../../core/infrastucture/http/controller"
import { handleControllerError } from "../../../../../shared/utils/handle-controller-error"
import { IdSchema } from "../../../../../shared/validations/id-schema"
import { GetJobOppeningByIdUseCase } from "../../../application/use-cases/job-oppening/get-job-oppening-by-id.useCase"


export class GetJobOppeningByIdController implements IController<any> {
    constructor(private useCase:GetJobOppeningByIdUseCase){}
    
    async handle(request: HttpRequest<any>): Promise<HttpResponse> {
        try {
            console.log("called")
            const { id } = IdSchema.parse(request.params)
            
            const response = await this.useCase.execute(id)

            return {
                statusCode: 200,
                body: response
            }
        } catch (error) {
            return handleControllerError(error)
        }
    }
}