"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetNewsController = void 0;
class GetNewsController {
    constructor(getNewsUseCase) {
        this.getNewsUseCase = getNewsUseCase;
    }
    async handle(req, res) {
        try {
            const news = await this.getNewsUseCase.execute();
            return res.status(200).json(news);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno no servidor." });
        }
    }
}
exports.GetNewsController = GetNewsController;
