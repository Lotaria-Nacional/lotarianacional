import { z } from "zod"
import { CreateNewsUseCase } from "../../application/use-cases/create-news.useCase"
import { HttpRequest, HttpResponse, IController } from "../../../../core/infrastucture/http/controller"

export class CreateNewsController implements IController {
  constructor(private useCase: CreateNewsUseCase) {}

  async handle(req: HttpRequest):Promise<HttpResponse> {
    const fileImage = req.file?.buffer

    const createNewsSchema = z.object({
      image: z.any(),
      title: z.string().min(1, "O título é obrigatório."),
      description: z.string().min(1, "A descrição é obrigatória."),
    })
    try {
      const newsData = createNewsSchema.parse(req.body)

      await this.useCase.execute({ ...newsData, image: fileImage! })
      return {statusCode:201,body:{ message: "Criado com sucesso!" }}
    } catch (error) {
      if (error instanceof z.ZodError) {
        return { statusCode:400, body:{ message: error.errors[0].message }}
      }
      return { statusCode:400,body:{ message: "Erro interno no servidor.", err:error } }
    }
  }
}
