import { handleControllerError } from "@/shared/utils/handle-controller-error"
import { CreateUserDTO, createUserSchema } from "../validations/create-user.schema"
import { CreateUserUseCase } from "../../application/use-cases/create-user.useCase"
import { HttpRequest, HttpResponse, IController } from "@/core/infrastucture/http/controller"

export class CreateUserController implements IController<CreateUserDTO> {
  constructor(private useCase: CreateUserUseCase) {}

  async handle(req: HttpRequest<CreateUserDTO>):Promise<HttpResponse> {
    const file = req.file as Express.Multer.File
    const fileBuffer = file.buffer

    try {
      const body = createUserSchema.parse({...req.body, profilePic:fileBuffer})

      await this.useCase.execute({
        ...body,
        profilePic: fileBuffer,
      })

      return { statusCode:201,body:{ message: "Usuário criado com sucesso!" } }
    } catch (error) {
      return handleControllerError(error)
    }
  }
}