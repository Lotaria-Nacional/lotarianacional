"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetNewsByIdController = void 0;
const notFound_error_1 = require("../../../../shared/errors/notFound.error");
class GetNewsByIdController {
    constructor(getNewsByIdUseCase) {
        this.getNewsByIdUseCase = getNewsByIdUseCase;
    }
    async handle(req, res) {
        try {
            const newsData = await this.getNewsByIdUseCase.execute(req.params.id);
            return res.status(200).json(newsData);
        }
        catch (error) {
            if (error instanceof notFound_error_1.NotFoundError) {
                return res.status(404).json({ message: error.message });
            }
            return res.status(500).json({ message: "Erro interno no servidor." });
        }
    }
}
exports.GetNewsByIdController = GetNewsByIdController;
