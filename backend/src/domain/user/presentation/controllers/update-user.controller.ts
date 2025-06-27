import { z } from "zod"
import { NotFoundError } from "@/core/errors/notFound.error"
import { UpdateUserUseCase } from "../../application/use-cases/update-user.useCase"
import { HttpRequest, HttpResponse, IController } from "@/core/infrastucture/http/controller"

export class UpdateUserController implements IController{
  constructor(private uesCase: UpdateUserUseCase) {}

  async handle(req: HttpRequest):Promise<HttpResponse> {
    const idSchema = z.object({
      id: z.string(),
    })
    const updateUserSchema = z.object({
      firstName: z.string().optional(),
      lastName: z.string().optional(),
      email: z.string().email().optional(),
      password: z.string().optional(),
      profilePic: z.string().optional(),
      role: z.string().optional(),
    })

    try {
      const profileImage = req.file?.buffer
      const requestId = idSchema.parse(req.params)
      const updateUserData = updateUserSchema.parse(req.body)

      const updatedUser = await this.uesCase.execute(requestId.id, {
        ...updateUserData,
        profilePic: profileImage,
      })

      return {
        statusCode:200,
        body:{ message: "Usuário atualizado", data: updatedUser }
      }
    } catch (error) {
      if (error instanceof NotFoundError) {
        return {statusCode:404,body:{ message: error.message }}
      }
      if (error instanceof z.ZodError) {
        return {statusCode:400,body:{ message: error.errors[0].message }}
      }
      return {statusCode:500,
        body:{ message: "Erro interno no servidor.", error: error }}
    }
  }
}
