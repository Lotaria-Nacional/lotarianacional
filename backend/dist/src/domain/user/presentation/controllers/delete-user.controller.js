"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserController = void 0;
const not_found_error_1 = require("../../../../core/errors/common/not-found.error");
class DeleteUserController {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(req) {
        const { id } = req.params;
        try {
            await this.useCase.execute(id);
            return { statusCode: 200, body: { message: "Usuário removido com sucesso." } };
        }
        catch (error) {
            if (error instanceof not_found_error_1.NotFoundError) {
                return { statusCode: 404, body: { message: error.message } };
            }
            return { statusCode: 500, body: { message: "Erro interno do servidor." } };
        }
    }
}
exports.DeleteUserController = DeleteUserController;
//# sourceMappingURL=delete-user.controller.js.map