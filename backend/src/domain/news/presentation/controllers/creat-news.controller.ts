import { handleControllerError } from "@/shared/utils/handle-controller-error"
import { CreateNewsUseCase } from "../../application/use-cases/create-news.useCase"
import { CreateNewsDTO, createNewsSchema } from "../validations/create-news.schema"
import { HttpRequest, HttpResponse, IController } from "@/core/infrastucture/http/controller"

export class CreateNewsController implements IController<CreateNewsDTO> {
  constructor(private useCase: CreateNewsUseCase) {}

  async handle(req: HttpRequest<CreateNewsDTO>):Promise<HttpResponse> {
    const file = req.file as Express.Multer.File
    const fileBuffer = file.buffer

    try {
      const body = createNewsSchema.parse({...req.body, image:fileBuffer})

      await this.useCase.execute({ ...body, image: fileBuffer})

      return { statusCode:201, body: { message: "Notícia adicionada com sucesso" } }

    } catch (error) {
      return handleControllerError(error)
    }
  }
}
