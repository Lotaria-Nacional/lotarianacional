import { NotFoundError } from "../../../../core/errors/notFound.error"
import { GetUserByIdUseCase } from "../../application/use-cases/get-user-by-id.useCase"
import { HttpRequest, HttpResponse, IController } from "../../../../core/infrastucture/http/controller"

export class GetUserByIdController implements IController {
  constructor(private useCase: GetUserByIdUseCase) {}

  async handle(req: HttpRequest):Promise<HttpResponse> {
    const { id } = req.params

    try {
      const user = await this.useCase.execute(id)
      return { statusCode:200, body:user }
    } catch (error) {
      if (error instanceof NotFoundError) {
        return { statusCode:404, body:{ message: error.message } }
      }
      return { statusCode:500, body:{ message: "Erro no servidor." } }
    }
  }
}

//008418654LA049
