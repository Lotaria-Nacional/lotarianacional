import { z } from "zod"
import { CreateUserUseCase } from "../../application/use-cases/create-user.useCase"
import { HttpRequest, HttpResponse, IController } from "@/core/infrastucture/http/controller"

export class CreateUserController implements IController {
  constructor(private useCase: CreateUserUseCase) {}

  async handle(req: HttpRequest):Promise<HttpResponse> {
    const profileImage = req.file?.buffer
    try {
      const createUserSchema = z.object({
        firstName: z.string().min(1, "O nome é obrigatório."),
        lastName: z.string().min(1, "O sobrenome é obrigatório."),
        email: z.string().email().min(1, "O email é obrigatório."),
        role: z.string().min(1, "A função do usuário é obrigatória."),
        password: z.string().min(6, "A palavra-passe deve conter pelo menos 6 caractéres."),
        profilePic: z.string().optional(),
      })

      const user = createUserSchema.parse(req.body)

      await this.useCase.execute({
        ...user,
        profilePic: profileImage,
      })

      return { statusCode:201,body:{ message: "Usuário criado com sucesso!" } }
    } catch (error) {
      if (error instanceof z.ZodError) {
        return { statusCode:400,body:{ message: error.errors[0].message } }
      }
      console.error(error)
      return { statusCode:500,body:{ message: "Internal server error" } }
    }
  }
}
