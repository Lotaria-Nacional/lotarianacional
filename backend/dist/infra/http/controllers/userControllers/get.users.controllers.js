"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUsersController = void 0;
class GetUsersController {
    constructor(getUsersUseCase) {
        this.getUsersUseCase = getUsersUseCase;
    }
    async handle(req, res) {
        const users = await this.getUsersUseCase.execute();
        if (users.length === 0) {
            return res.json({ message: "Não há usuários cadastrados ainda." });
        }
        return res.status(200).json(users);
    }
}
exports.GetUsersController = GetUsersController;
