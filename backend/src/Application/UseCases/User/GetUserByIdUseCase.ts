import { User } from "../../../Domain/Entities/User/User"
import { IUserRepository } from "../../../Domain/Entities/User/IUserRepository"
import { NotFoundError } from "../../../Shared/Errors/NotFoundError"

export class GetUserByIdUseCase {
  constructor(private userRepository: IUserRepository) {}
  async execute(id: string): Promise<User> {
    const user = await this.userRepository.getById(id)

    if (!user) {
      throw new NotFoundError("Usúario não encontrado.")
    }

    return User.create(user)
  }
}
