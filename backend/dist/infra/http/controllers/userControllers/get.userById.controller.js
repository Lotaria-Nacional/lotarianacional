"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserByIdController = void 0;
const notFound_error_1 = require("../../../../shared/errors/notFound.error");
class GetUserByIdController {
    constructor(getUserByIdUseCase) {
        this.getUserByIdUseCase = getUserByIdUseCase;
    }
    async handle(req, res) {
        const { id } = req.params;
        try {
            const user = await this.getUserByIdUseCase.execute(id);
            return res.status(200).json(user);
        }
        catch (error) {
            if (error instanceof notFound_error_1.NotFoundError) {
                return res.status(404).json({ message: error.message });
            }
            return res.status(500).json({ message: "Erro no servidor." });
        }
    }
}
exports.GetUserByIdController = GetUserByIdController;
//008418654LA049
