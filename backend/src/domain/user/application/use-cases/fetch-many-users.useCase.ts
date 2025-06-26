import { User } from "../../enterprise/entities/user"
import { IUserRepository } from "../interfaces/user.repository"

 
export class FetchManyUsersUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.userRepository.getAll()
    return users
  }
}
