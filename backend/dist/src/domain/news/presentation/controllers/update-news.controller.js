"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNewsController = void 0;
const edit_news_schema_1 = require("../validations/edit-news.schema");
const handle_controller_error_1 = require("../../../../shared/utils/handle-controller-error");
class UpdateNewsController {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(req) {
        const { id } = req.params;
        const file = req.file;
        const fileBuffer = file.buffer ?? undefined;
        try {
            const body = edit_news_schema_1.editNewsSchema.parse({ ...req.body, id });
            await this.useCase.execute({
                ...body,
                image: fileBuffer ?? undefined,
            });
            return {
                statusCode: 200,
                body: { message: "Atualizado com sucesso" },
            };
        }
        catch (error) {
            return (0, handle_controller_error_1.handleControllerError)(error);
        }
    }
}
exports.UpdateNewsController = UpdateNewsController;
//# sourceMappingURL=update-news.controller.js.map