import { User } from "../../../domain/entities/user/user"
import { IUserRepository } from "../../../domain/entities/user/user.repository"
import { NotFoundError } from "../../../shared/errors/notFound.error"

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
