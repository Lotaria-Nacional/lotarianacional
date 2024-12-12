import { Request, Response, Router } from "express"
import { JwtTokenService } from "../../Services/Token/JwtTokenService"
import { BcryptHashService } from "../../Services/Hash/BcryptHashService"
import { PrismaUserRespository } from "../../repositories/prisma/prisma.user.repository"
import { AuthenticateUserController } from "../controllers/authController/authenticate.user.controller"
import { AuthenticateUserUseCase } from "../../../application/useCases/user/authenticate.user.useCase"

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

router.post("/auth/login", (req: Request, res: Response) => {
  authenticateUserController.handle(req, res)
})

export default router
