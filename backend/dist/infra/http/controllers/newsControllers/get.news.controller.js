"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetNewsController = void 0;
class GetNewsController {
    constructor(getNewsUseCase) {
        this.getNewsUseCase = getNewsUseCase;
    }
    async handle(req, res) {
        const { page = 1, pageSize = 10 } = req.query;
        const parsedPage = parseInt(page, 10);
        const parsedPageSize = parseInt(pageSize, 10);
        try {
            const news = await this.getNewsUseCase.execute({ page: parsedPage, pageSize: parsedPageSize });
            return res.status(200).json(news);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno no servidor." });
        }
    }
}
exports.GetNewsController = GetNewsController;
