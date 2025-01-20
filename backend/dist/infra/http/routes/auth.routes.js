"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const JwtTokenService_1 = require("../../Services/Token/JwtTokenService");
const BcryptHashService_1 = require("../../Services/Hash/BcryptHashService");
const prisma_user_repository_1 = require("../../repositories/prisma/prisma.user.repository");
const login_controller_1 = require("../controllers/authController/login.controller");
const authenticate_user_useCase_1 = require("../../../application/useCases/user/authenticate.user.useCase");
const logout_controller_1 = require("../controllers/authController/logout.controller");
const router = (0, express_1.Router)();
const userRepository = new prisma_user_repository_1.PrismaUserRespository();
const tokenService = new JwtTokenService_1.JwtTokenService();
const hashService = new BcryptHashService_1.BcryptHashService();
const authenticateUserUseCase = new authenticate_user_useCase_1.AuthenticateUserUseCase(userRepository, hashService, tokenService);
const loginController = new login_controller_1.LoginController(authenticateUserUseCase);
const logoutController = new logout_controller_1.LogoutController();
router.post("/auth/login", (req, res) => {
    loginController.handle(req, res);
});
router.post("/auth/logout", (req, res) => {
    logoutController.handle(req, res);
});
exports.default = router;
