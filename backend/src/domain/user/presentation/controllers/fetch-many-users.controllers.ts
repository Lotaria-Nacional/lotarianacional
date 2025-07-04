import { IController, HttpRequest, HttpResponse } from "../../../../core/infrastucture/http/controller"
import { FetchManyUsersUseCase } from "../../application/use-cases/fetch-many-users.useCase"

export class FetchManyUsersController implements IController {
  constructor(private useCase: FetchManyUsersUseCase) {}

  async handle(req: HttpRequest):Promise<HttpResponse> {
    const users = await this.useCase.execute()
    if (users.length === 0) {
      return { statusCode:404, body:{ message: "Não há usuários cadastrados ainda." }}
    }
    return { statusCode:200, body:users}
  }
}
