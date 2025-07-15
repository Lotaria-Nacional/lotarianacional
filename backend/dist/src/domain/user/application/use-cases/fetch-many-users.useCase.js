"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManyUsersUseCase = void 0;
class FetchManyUsersUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute() {
        const users = await this.userRepository.getAll();
        return users;
    }
}
exports.FetchManyUsersUseCase = FetchManyUsersUseCase;
//# sourceMappingURL=fetch-many-users.useCase.js.map