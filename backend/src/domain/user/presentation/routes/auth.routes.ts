import {Router } from "express"

import { prisma } from "@/main/config/prisma"
import { makeAuthController } from "../factories/make-auth-contoller"
import { JwtTokenService } from "@/core/services/token/jwt-token-service"
import { BcryptHashService } from "@/core/services/hash/bcrypt-hash-service"
import { expressAdapterController } from "@/core/adapters/express-adapter-controller"
import { PrismaUserRespository } from "../../infrastructure/repositories/prisma/prisma.user.repository"

const authRouter = Router()

const userRepository = new PrismaUserRespository(prisma)
const tokenService = new JwtTokenService()
const hashService = new BcryptHashService()

const { loginController, logoutController } = makeAuthController( userRepository, hashService, tokenService)

authRouter.post("/auth/login", expressAdapterController(loginController))
authRouter.post("/auth/logout", expressAdapterController(logoutController))

export default authRouter
