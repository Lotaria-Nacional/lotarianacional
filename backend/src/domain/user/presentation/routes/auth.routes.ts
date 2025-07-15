import { Router } from "express";

import { makeAuthController } from "../factories/make-auth-contoller";
import { expressAdapterController } from "../../../../core/adapters/express-adapter-controller";
import { PrismaUserRespository } from "../../infrastructure/repositories/prisma/prisma.user.repository";
import { BcryptHashService } from "../../../../core/services/hash/bcrypt-hash-service";
import { JwtTokenService } from "../../../../core/services/token/jwt-token-service";
import { prisma } from "../../../../main/config/prisma";

const authRouter = Router();

const userRepository = new PrismaUserRespository(prisma);
const tokenService = new JwtTokenService();
const hashService = new BcryptHashService();

const { loginController } = makeAuthController(userRepository, hashService, tokenService);

authRouter.post("/login", expressAdapterController(loginController));

export default authRouter;
