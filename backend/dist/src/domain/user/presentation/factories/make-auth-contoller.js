"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAuthController = makeAuthController;
const login_controller_1 = require("../controllers/auth/login.controller");
const authenticate_user_useCase_1 = require("../../application/use-cases/authenticate-user.useCase");
function makeAuthController(repository, hashService, jwtService) {
    const loginController = new login_controller_1.LoginController(new authenticate_user_useCase_1.AuthenticateUserUseCase(repository, hashService, jwtService));
    return {
        loginController,
    };
}
//# sourceMappingURL=make-auth-contoller.js.map