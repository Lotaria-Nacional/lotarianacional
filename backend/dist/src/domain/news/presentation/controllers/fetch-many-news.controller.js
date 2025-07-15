"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManyNewsController = void 0;
class FetchManyNewsController {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(req) {
        const { page = 1, pageSize = 10 } = req.query;
        const parsedPage = parseInt(page, 10);
        const parsedPageSize = parseInt(pageSize, 10);
        try {
            const news = await this.useCase.execute({ page: parsedPage, pageSize: parsedPageSize });
            return { statusCode: 200, body: news };
        }
        catch (error) {
            return { statusCode: 500, body: { message: "Erro interno no servidor." } };
        }
    }
}
exports.FetchManyNewsController = FetchManyNewsController;
//# sourceMappingURL=fetch-many-news.controller.js.map