import { NotFoundError } from "@/core/errors/notFound.error"
import { HttpRequest, HttpResponse, IController } from "@/core/infrastucture/http/controller"
import { DeleteLotteryResultUseCase } from "../../../application/use-cases/lottery-result/delete-lottery-result.useCase"

export class DeleteLotteryResultController implements IController {
  constructor(private useCase: DeleteLotteryResultUseCase) {}

  async handle(req:HttpRequest): Promise<HttpResponse>{
    try {
      const { id } = req.params
      await this.useCase.execute(id)
      return {statusCode:200,body:{ message: "Removido com sucesso." }}
    } catch (error) {
      if (error instanceof NotFoundError) {
        return {statusCode:404,body:{ message: error.message }}
      }
      return {statusCode:500,body:{ message: "Erro interno no servidor." }}
    }
  }
}
