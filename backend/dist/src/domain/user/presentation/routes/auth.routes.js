"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const make_auth_contoller_1 = require("../factories/make-auth-contoller");
const express_adapter_controller_1 = require("../../../../core/adapters/express-adapter-controller");
const prisma_user_repository_1 = require("../../infrastructure/repositories/prisma/prisma.user.repository");
const bcrypt_hash_service_1 = require("../../../../core/services/hash/bcrypt-hash-service");
const jwt_token_service_1 = require("../../../../core/services/token/jwt-token-service");
const prisma_1 = require("../../../../main/config/prisma");
const authRouter = (0, express_1.Router)();
const userRepository = new prisma_user_repository_1.PrismaUserRespository(prisma_1.prisma);
const tokenService = new jwt_token_service_1.JwtTokenService();
const hashService = new bcrypt_hash_service_1.BcryptHashService();
const { loginController } = (0, make_auth_contoller_1.makeAuthController)(userRepository, hashService, tokenService);
authRouter.post("/login", (0, express_adapter_controller_1.expressAdapterController)(loginController));
exports.default = authRouter;
//# sourceMappingURL=auth.routes.js.map