import { EditNewsDTO, editNewsSchema } from "../validations/edit-news.schema"
import { handleControllerError } from "@/shared/utils/handle-controller-error"
import { UpdateNewsUseCase } from "../../application/use-cases/update-news.useCase"
import { HttpRequest, HttpResponse, IController } from "@/core/infrastucture/http/controller"

export class UpdateNewsController implements IController<EditNewsDTO> {
  constructor(private useCase: UpdateNewsUseCase) {}

  async handle(req: HttpRequest<EditNewsDTO>):Promise<HttpResponse> {
    const { id } = req.params

    const file = req.file as Express.Multer.File
    const fileBuffer = file.buffer ?? undefined

    try {
      const body = editNewsSchema.parse({...req.body, id})

      await this.useCase.execute({
        ...body,
        image: fileBuffer ?? undefined,
      })

      return {
          statusCode:200,
          body:{ message: "Atualizado com sucesso" }
      }
    } catch (error) {
      return handleControllerError(error)
    }
  }
}
