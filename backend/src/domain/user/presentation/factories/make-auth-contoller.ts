import { LoginController } from "../controllers/auth/login.controller";
import { LogoutController } from "../controllers/auth/logout.controller";
import { IUserRepository } from "../../application/interfaces/user.repository";
import { AuthenticateUserUseCase } from "../../application/use-cases/authenticate-user.useCase";
import { IHashService } from "../../../../core/contracts/hash.interface";
import { ITokenService } from "../../../../core/contracts/token.interface";

export function makeAuthController(repository:IUserRepository,hashService:IHashService,jwtService: ITokenService){
    const loginController = new LoginController(new AuthenticateUserUseCase(repository,hashService,jwtService))
    const logoutController = new LogoutController()

    return {
        loginController,
        logoutController
    }
}