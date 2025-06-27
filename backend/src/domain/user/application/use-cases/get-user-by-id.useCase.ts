import { NotFoundError } from "@/core/errors/notFound.error"
import { User } from "../../enterprise/entities/user"
import { IUserRepository } from "../interfaces/user.repository"


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
