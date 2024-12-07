import { IHashService } from "../../../Domain/Services/IHashService"
import { NotFoundError } from "../../../Shared/Errors/NotFoundError"
import { ITokenService } from "../../../Domain/Services/ITokenService"
import { InvalidPassword } from "../../../Shared/Errors/InvalidPasswordError"
import { IUserRepository } from "../../../Domain/Entities/User/IUserRepository"

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
