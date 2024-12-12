"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAgencyController = void 0;
const notFound_error_1 = require("../../../../shared/errors/notFound.error");
class DeleteAgencyController {
    constructor(deleteAgencyUseCase) {
        this.deleteAgencyUseCase = deleteAgencyUseCase;
    }
    async handle(req, res) {
        const { id } = req.params;
        try {
            await this.deleteAgencyUseCase.execute(id);
            return res.status(200).json({ message: "Removido com sucesso." });
        }
        catch (error) {
            if (error instanceof notFound_error_1.NotFoundError) {
                return res.status(404).json({ message: error.message });
            }
            return res.status(500).json({ message: "Erro interno no servidor." });
        }
    }
}
exports.DeleteAgencyController = DeleteAgencyController;
