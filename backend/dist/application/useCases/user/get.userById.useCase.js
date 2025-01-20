"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserByIdUseCase = void 0;
const User_1 = require("../../../Domain/Entities/User/User");
const notFound_error_1 = require("../../../shared/errors/notFound.error");
class GetUserByIdUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(id) {
        const user = await this.userRepository.getById(id);
        if (!user) {
            throw new notFound_error_1.NotFoundError("Usúario não encontrado.");
        }
        return User_1.User.create(user);
    }
}
exports.GetUserByIdUseCase = GetUserByIdUseCase;
