import { NotFoundError } from "../../../../core/errors/notFound.error"
import { DeleteUserUseCase } from "../../application/use-cases/delete-user.useCase"
import { HttpRequest, HttpResponse, IController } from "../../../../core/infrastucture/http/controller"

export class DeleteUserController implements IController {
  constructor(private useCase: DeleteUserUseCase) {}
  
  async handle(req: HttpRequest):Promise<HttpResponse> {
    const { id } = req.params
    try {
      await this.useCase.execute(id)
      return {statusCode:200,body:{ message: "Usuário removido com sucesso." }}
    } catch (error) {
      if (error instanceof NotFoundError) {
        return {statusCode:404,body:{ message: error.message }}
      }
      return {statusCode:500,body:{ message: "Erro interno do servidor." }}
    }
  }
}
