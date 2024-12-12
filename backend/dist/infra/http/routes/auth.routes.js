"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jwtTokenService_1 = require("../../services/token/jwtTokenService");
const bcryptHashService_1 = require("../../services/hash/bcryptHashService");
const prisma_user_repository_1 = require("../../repositories/prisma/prisma.user.repository");
const authenticate_user_controller_1 = require("../controllers/authController/authenticate.user.controller");
const authenticate_user_useCase_1 = require("../../../application/useCases/user/authenticate.user.useCase");
const router = (0, express_1.Router)();
const userRepository = new prisma_user_repository_1.PrismaUserRespository();
const tokenService = new jwtTokenService_1.JwtTokenService();
const hashService = new bcryptHashService_1.BcryptHashService();
const authenticateUserUseCase = new authenticate_user_useCase_1.AuthenticateUserUseCase(userRepository, hashService, tokenService);
const authenticateUserController = new authenticate_user_controller_1.AuthenticateUserController(authenticateUserUseCase);
router.post("/auth/login", (req, res) => {
    authenticateUserController.handle(req, res);
});
exports.default = router;
