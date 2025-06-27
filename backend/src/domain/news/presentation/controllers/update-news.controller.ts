import { z } from "zod"
import { NotFoundError } from "@/core/errors/notFound.error"
import { UpdateNewsUseCase } from "../../application/use-cases/update-news.useCase"
import { HttpRequest, HttpResponse, IController } from "@/core/infrastucture/http/controller"

export class UpdateNewsController implements IController {
  constructor(private useCase: UpdateNewsUseCase) {}

  async handle(req: HttpRequest):Promise<HttpResponse> {
    const { id } = req.params
    const fileImage = req.file?.buffer

    const updateNewsSchema = z.object({
      image: z.any().optional(),
      title: z.string().optional(),
      description: z.string().optional(),
    })
    try {
      const newsData = updateNewsSchema.parse(req.body)
      const updatedNews = await this.useCase.execute(id, {
        ...newsData,
        image: fileImage,
      })
      return {
          statusCode:200,
          body:{
            message: "Atualizado com sucesso",
            data: updatedNews
          }
      }
    } catch (error) {
      if (error instanceof NotFoundError) {
        return {statusCode:404,body:{ message: error.message }}
      }
      return {statusCode:500,body:{ message: "Erro interno no servidor." }}
    }
  }
}
