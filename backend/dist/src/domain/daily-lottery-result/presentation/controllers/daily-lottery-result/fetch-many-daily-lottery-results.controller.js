"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManyDailyLotteryResultsController = void 0;
class FetchManyDailyLotteryResultsController {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(req) {
        try {
            const results = await this.useCase.execute();
            return {
                statusCode: 200,
                body: results,
            };
        }
        catch (error) {
            return {
                statusCode: 500,
                body: { message: "Error: " + error },
            };
        }
    }
}
exports.FetchManyDailyLotteryResultsController = FetchManyDailyLotteryResultsController;
//# sourceMappingURL=fetch-many-daily-lottery-results.controller.js.map