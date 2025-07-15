"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManyLotteryResultsController = void 0;
class FetchManyLotteryResultsController {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(_req) {
        try {
            const results = await this.useCase.execute();
            const total = results.length;
            return { statusCode: 200, body: { results, total: total } };
        }
        catch (error) {
            return { statusCode: 500, body: { message: error.message } };
        }
    }
}
exports.FetchManyLotteryResultsController = FetchManyLotteryResultsController;
//# sourceMappingURL=fetch-many-lottery-results.controller.js.map