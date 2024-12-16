import { Request, Response, Router } from "express"
import { JwtTokenService } from "../../Services/Token/JwtTokenService"
import { BcryptHashService } from "../../Services/Hash/BcryptHashService"
import { PrismaUserRespository } from "../../repositories/prisma/prisma.user.repository"
import { LoginController } from "../controllers/authController/login.controller"
import { AuthenticateUserUseCase } from "../../../application/useCases/user/authenticate.user.useCase"
import { LogoutController } from "../controllers/authController/logout.controller"

const router = Router()

const userRepository = new PrismaUserRespository()
const tokenService = new JwtTokenService()
const hashService = new BcryptHashService()

const authenticateUserUseCase = new AuthenticateUserUseCase(
  userRepository,
  hashService,
  tokenService
)
const loginController = new LoginController(authenticateUserUseCase)
const logoutController = new LogoutController()

router.post("/auth/login", (req: Request, res: Response) => {
  loginController.handle(req, res)
})
router.post("/auth/logout", (req: Request, res: Response) => {
  logoutController.handle(req, res)
})

export default router
