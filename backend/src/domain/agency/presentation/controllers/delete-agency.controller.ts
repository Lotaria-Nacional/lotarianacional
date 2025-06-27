import { NotFoundError } from "@/core/errors/notFound.error"
import { DeleteAgencyUseCase } from "../../application/use-cases/delete-agency.useCase"
import { HttpRequest, HttpResponse, IController } from "@/core/infrastucture/http/controller"

export class DeleteAgencyController implements IController {
  constructor(private useCase: DeleteAgencyUseCase) {}

  async handle(req: HttpRequest):Promise<HttpResponse> {
    const { id } = req.params
    try {
      await this.useCase.execute(id)
      
      return {
        statusCode:200,
        body: { message: "Removido com sucesso." }
      }
    } catch (error) {
      if (error instanceof NotFoundError) {
        return {
          statusCode:404,
          body: { message: error.message }
        }
      }
      return {
        statusCode:500,
        body:{ message: "Erro interno no servidor." }
      }
    }
  }
}
