import { IHashService } from "../../../domain/services/hash.service.interface"
import { NotFoundError } from "../../../shared/errors/notFound.error"
import { ITokenService } from "../../../domain/services/token.service.interface"

import { IUserRepository } from "../../../domain/entities/user/user.repository"
import { InvalidPassword } from "../../../shared/errors/invalid.password.error"

export class AuthenticateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private hashService: IHashService,
    private tokenService: ITokenService
  ) {}

  async execute(email: string, password: string): Promise<{ token: string }> {
    const user = await this.userRepository.getByEmail(email)
    if (!user) throw new NotFoundError("Usuário não encontrado.")

    const isPasswordCorrect = await this.hashService.compare(
      password,
      user.password
    )
    if (!isPasswordCorrect) throw new InvalidPassword()

    const token = this.tokenService.generateToken({ userId: user.id })

    return { token }
  }
}
