import { z } from "zod"
import { NotFoundError } from "@/core/errors/notFound.error"
import { IController, HttpRequest, HttpResponse } from "@/core/infrastucture/http/controller"
import { DeleteDailyResultUseCase } from "../../../application/use-cases/daily-lottery-result/delete-daily-lottery-result.useCase"

export class DeleteDailyResultsController  implements IController{
  constructor(private deleteDailyResultUseCase: DeleteDailyResultUseCase) {}

  async handle(req: HttpRequest):Promise<HttpResponse> {
    const idSchema = z.string()
    try {
      const id = idSchema.parse(req.params.id)
      await this.deleteDailyResultUseCase.execute(id)

      return {statusCode:200, body:{ message: "Removido com sucesso." }}
    } catch (error) {
      if (error instanceof NotFoundError) {
        return {statusCode:404, body:{ message: error.message }}
      }
      return {statusCode:500, body:{ message: "Erro interno no servidor." }}
    }
  }
}
