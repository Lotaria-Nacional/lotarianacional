"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDailyResultsController = void 0;
const zod_1 = require("zod");
const not_found_error_1 = require("../../../../../core/errors/common/not-found.error");
class DeleteDailyResultsController {
    deleteDailyResultUseCase;
    constructor(deleteDailyResultUseCase) {
        this.deleteDailyResultUseCase = deleteDailyResultUseCase;
    }
    async handle(req) {
        const idSchema = zod_1.z.string();
        try {
            const id = idSchema.parse(req.params.id);
            await this.deleteDailyResultUseCase.execute(id);
            return { statusCode: 200, body: { message: "Removido com sucesso." } };
        }
        catch (error) {
            if (error instanceof not_found_error_1.NotFoundError) {
                return { statusCode: 404, body: { message: error.message } };
            }
            return { statusCode: 500, body: { message: "Erro interno no servidor." } };
        }
    }
}
exports.DeleteDailyResultsController = DeleteDailyResultsController;
//# sourceMappingURL=delete-daily-lottery-result.controller.js.map