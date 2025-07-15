"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNewsController = void 0;
const handle_controller_error_1 = require("../../../../shared/utils/handle-controller-error");
const create_news_schema_1 = require("../validations/create-news.schema");
class CreateNewsController {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(req) {
        const file = req.file;
        const fileBuffer = file.buffer;
        try {
            const body = create_news_schema_1.createNewsSchema.parse({ ...req.body, image: fileBuffer });
            await this.useCase.execute({ ...body, image: fileBuffer });
            return { statusCode: 201, body: { message: "Notícia adicionada com sucesso" } };
        }
        catch (error) {
            return (0, handle_controller_error_1.handleControllerError)(error);
        }
    }
}
exports.CreateNewsController = CreateNewsController;
//# sourceMappingURL=creat-news.controller.js.map