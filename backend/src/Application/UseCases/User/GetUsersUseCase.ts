import { User } from "../../../Domain/Entities/User/User"
import { IUserRepository } from "../../../Domain/Entities/User/IUserRepository"

export class GetUsersUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.userRepository.getAll()
    return users
  }
}
