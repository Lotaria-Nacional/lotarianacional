import { Request, Response, Router } from "express"
import { JwtTokenService } from "../../Services/Token/JwtTokenService"
import { BcryptHashService } from "../../Services/Hash/BcryptHashService"
import { PrismaUserRespository } from "../../Repositories/prisma/PrismaUserRepository"
import { AuthenticateUserController } from "../Controllers/AuthController/AuthenticateUserController"
import { AuthenticateUserUseCase } from "../../../Application/UseCases/User/AuthenticateUserUseCase"

const router = Router()

const userRepository = new PrismaUserRespository()
const tokenService = new JwtTokenService()
const hashService = new BcryptHashService()

const authenticateUserUseCase = new AuthenticateUserUseCase(
  userRepository,
  hashService,
  tokenService
)
const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase
)

router.post("/auth/login", (req: Request, res: Response) => {authenticateUserController.handle(req,res)})

export default router
