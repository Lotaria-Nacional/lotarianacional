"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLastDailyResultController = void 0;
const not_found_error_1 = require("../../../../../core/errors/common/not-found.error");
class GetLastDailyResultController {
    getLastDailyResultUseCase;
    constructor(getLastDailyResultUseCase) {
        this.getLastDailyResultUseCase = getLastDailyResultUseCase;
    }
    async handle(req) {
        try {
            const lastDailyResult = await this.getLastDailyResultUseCase.execute();
            return { statusCode: 200, body: lastDailyResult };
        }
        catch (error) {
            if (error instanceof not_found_error_1.NotFoundError) {
                return { statusCode: 404, body: { message: error.message } };
            }
            return { statusCode: 500, body: { message: "Erro interno no servidor.", error: error } };
        }
    }
}
exports.GetLastDailyResultController = GetLastDailyResultController;
//# sourceMappingURL=get-last-daily-lottery-result.controller.js.map