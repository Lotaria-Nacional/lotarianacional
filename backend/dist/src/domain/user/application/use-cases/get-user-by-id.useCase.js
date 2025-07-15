"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserByIdUseCase = void 0;
const not_found_error_1 = require("../../../../core/errors/common/not-found.error");
const user_1 = require("../../enterprise/entities/user");
class GetUserByIdUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(id) {
        const user = await this.userRepository.getById(id);
        if (!user) {
            throw new not_found_error_1.NotFoundError("Usúario não encontrado.");
        }
        return user_1.User.create(user);
    }
}
exports.GetUserByIdUseCase = GetUserByIdUseCase;
//# sourceMappingURL=get-user-by-id.useCase.js.map