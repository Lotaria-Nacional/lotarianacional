import { z } from "zod";
import { AuthenticateUserUseCase } from "../../../application/use-cases/authenticate-user.useCase";
import { InvalidPassword } from "../../../../../core/errors/common/invalid-password.error";
import { NotFoundError } from "../../../../../core/errors/common/not-found.error";
import { IController, HttpRequest, HttpResponse } from "../../../../../core/infrastucture/http/controller";

export class LoginController implements IController {
  constructor(private useCase: AuthenticateUserUseCase) {}

  async handle(req: HttpRequest): Promise<HttpResponse> {
    const authenticationSchema = z.object({
      email: z.string().email().min(1, "O email é obrigatório."),
      password: z.string().min(6, "A password é obrigatória."),
    });

    try {
      const authentication = authenticationSchema.parse(req.body);

      const { token, user } = await this.useCase.execute(authentication.email, authentication.password);

      const userWithoutPassword = {
        id: user.id,
        email: user.email,
        name: `${user.firstName} ${user.lastName}`,
        role: user.role,
        profilePic: user.profilePic,
      };
      return {
        statusCode: 200,
        body: {
          message: "Login feito com sucesso.",
          user: userWithoutPassword,
          token: token,
        },
      };
    } catch (error) {
      if (error instanceof NotFoundError) {
        return { statusCode: 404, body: { message: error.message } };
      }
      if (error instanceof z.ZodError) {
        return { statusCode: 400, body: { message: error.errors[0].message } };
      }
      if (error instanceof InvalidPassword) {
        return { statusCode: 400, body: { message: error.message } };
      }
      return { statusCode: 500, body: { message: "Erro interno no servidor." } };
    }
  }
}
