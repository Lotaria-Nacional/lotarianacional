import { User } from "../../../Domain/Entities/User/User"
import { IUserRepository } from "../../../Domain/Entities/User/user.repository"

export class GetUsersUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.userRepository.getAll()
    return users
  }
}
