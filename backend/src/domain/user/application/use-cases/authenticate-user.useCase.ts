import { User } from "../../enterprise/entities/user";
import { IUserRepository } from "../interfaces/user.repository";
import { NotFoundError } from "../../../../core/errors/common/not-found.error";
import { IHashService } from "../../../../core/contracts/hash.interface";
import { ITokenService } from "../../../../core/contracts/token.interface";
import { InvalidPassword } from "../../../../core/errors/common/invalid-password.error";

export class AuthenticateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private hashService: IHashService,
    private tokenService: ITokenService,
  ) {}

  async execute(email: string, password: string): Promise<{ token: string; user: User }> {
    const user = await this.userRepository.getByEmail(email);
    if (!user) throw new NotFoundError("Usuário não encontrado.");

    const isPasswordCorrect = await this.hashService.compare(password, user.password);
    if (!isPasswordCorrect) throw new InvalidPassword();

    const token = this.tokenService.generateToken({ userId: user.id });

    return { token, user };
  }
}
