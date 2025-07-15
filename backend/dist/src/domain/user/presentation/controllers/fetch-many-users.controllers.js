"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManyUsersController = void 0;
class FetchManyUsersController {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(req) {
        const users = await this.useCase.execute();
        if (users.length === 0) {
            return { statusCode: 404, body: { message: "Não há usuários cadastrados ainda." } };
        }
        return { statusCode: 200, body: users };
    }
}
exports.FetchManyUsersController = FetchManyUsersController;
//# sourceMappingURL=fetch-many-users.controllers.js.map