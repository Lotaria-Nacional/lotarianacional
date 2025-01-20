"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserUseCase = void 0;
const notFound_error_1 = require("../../../shared/errors/notFound.error");
const invalid_password_error_1 = require("../../../shared/errors/invalid.password.error");
class AuthenticateUserUseCase {
    constructor(userRepository, hashService, tokenService) {
        this.userRepository = userRepository;
        this.hashService = hashService;
        this.tokenService = tokenService;
    }
    async execute(email, password) {
        const user = await this.userRepository.getByEmail(email);
        if (!user)
            throw new notFound_error_1.NotFoundError("Usuário não encontrado.");
        const isPasswordCorrect = await this.hashService.compare(password, user.password);
        if (!isPasswordCorrect)
            throw new invalid_password_error_1.InvalidPassword();
        const token = this.tokenService.generateToken({ userId: user.id });
        return { token, user };
    }
}
exports.AuthenticateUserUseCase = AuthenticateUserUseCase;
