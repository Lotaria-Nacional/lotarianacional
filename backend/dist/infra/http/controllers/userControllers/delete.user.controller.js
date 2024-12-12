"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserController = void 0;
const notFound_error_1 = require("../../../../shared/errors/notFound.error");
class DeleteUserController {
    constructor(deleteUserUseCase) {
        this.deleteUserUseCase = deleteUserUseCase;
    }
    async handle(req, res) {
        const { id } = req.params;
        try {
            await this.deleteUserUseCase.execute(id);
            return res.status(200).json({ message: "Usuário removido com sucesso." });
        }
        catch (error) {
            if (error instanceof notFound_error_1.NotFoundError) {
                return res.status(404).json({ message: error.message });
            }
            return res.status(500).json({ message: "Erro interno do servidor." });
        }
    }
}
exports.DeleteUserController = DeleteUserController;
