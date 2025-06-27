import { EditUserDTO, editUserSchema } from "../validations/edit-user.schema"
import { handleControllerError } from "@/shared/utils/handle-controller-error"
import { UpdateUserUseCase } from "../../application/use-cases/update-user.useCase"
import { HttpRequest, HttpResponse, IController } from "@/core/infrastucture/http/controller"

export class UpdateUserController implements IController<EditUserDTO> {
  constructor(private uesCase: UpdateUserUseCase) {}

  async handle(req: HttpRequest<EditUserDTO>):Promise<HttpResponse> {
    const { id } = req.params

    try {
      const file = req.file as Express.Multer.File
      const fileBuffer = file.buffer

      const body = editUserSchema.parse({ ...req.body, id, profilePic:fileBuffer})

      await this.uesCase.execute({...body, profilePic:fileBuffer})

      return {
        statusCode:200,
        body:{ message: "Usuário atualizado" }
      }
    } catch (error) {
      return handleControllerError(error)
    }
  }
}
