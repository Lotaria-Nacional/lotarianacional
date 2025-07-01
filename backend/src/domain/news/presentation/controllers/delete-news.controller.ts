import { NotFoundError } from "@/core/errors/common/not-found.error"
import { DeleteNewsUseCase } from "../../application/use-cases/delete-news.useCase"
import { HttpRequest, HttpResponse, IController } from "@/core/infrastucture/http/controller"

export class DeleteNewsController implements IController{
  constructor(private useCase: DeleteNewsUseCase) {}

  async handle(req: HttpRequest):Promise<HttpResponse> {
    const { id } = req.params
    try {
      await this.useCase.execute(id)
      return { statusCode:200, body:{ message: "Removido com sucesso." } }
    } catch (error) {
      if (error instanceof NotFoundError) {
        return { statusCode:404, body: { message: error.message } }
      }
      return { statusCode:500, body: { message: "Erro interno no servidor." } }
    }
  }
}
