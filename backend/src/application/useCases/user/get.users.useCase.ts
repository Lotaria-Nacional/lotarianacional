import { User } from "../../../domain/entities/user/user"
import { IUserRepository } from "../../../domain/entities/user/user.repository"

export class GetUsersUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.userRepository.getAll()
    return users
  }
}
