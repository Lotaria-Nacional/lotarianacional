"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserUseCase = void 0;
const not_found_error_1 = require("../../../../core/errors/common/not-found.error");
const invalid_password_error_1 = require("../../../../core/errors/common/invalid-password.error");
class AuthenticateUserUseCase {
    userRepository;
    hashService;
    tokenService;
    constructor(userRepository, hashService, tokenService) {
        this.userRepository = userRepository;
        this.hashService = hashService;
        this.tokenService = tokenService;
    }
    async execute(email, password) {
        const user = await this.userRepository.getByEmail(email);
        if (!user)
            throw new not_found_error_1.NotFoundError("Usuário não encontrado.");
        const isPasswordCorrect = await this.hashService.compare(password, user.password);
        if (!isPasswordCorrect)
            throw new invalid_password_error_1.InvalidPassword();
        const token = this.tokenService.generateToken({ userId: user.id });
        return { token, user };
    }
}
exports.AuthenticateUserUseCase = AuthenticateUserUseCase;
//# sourceMappingURL=authenticate-user.useCase.js.map