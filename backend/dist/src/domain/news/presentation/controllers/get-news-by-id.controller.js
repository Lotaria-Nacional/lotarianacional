"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetNewsByIdController = void 0;
const not_found_error_1 = require("../../../../core/errors/common/not-found.error");
class GetNewsByIdController {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(req) {
        try {
            const newsData = await this.useCase.execute(req.params.id);
            return { statusCode: 200, body: newsData };
        }
        catch (error) {
            if (error instanceof not_found_error_1.NotFoundError) {
                return { statusCode: 404, body: { message: error.message } };
            }
            return { statusCode: 500, body: { message: "Erro interno no servidor." } };
        }
    }
}
exports.GetNewsByIdController = GetNewsByIdController;
//# sourceMappingURL=get-news-by-id.controller.js.map