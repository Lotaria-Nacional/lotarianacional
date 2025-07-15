"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManyStatisticsController = void 0;
class FetchManyStatisticsController {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(_req) {
        try {
            const statistic = await this.useCase.execute();
            return { statusCode: 200, body: statistic };
        }
        catch (error) {
            return { statusCode: 500, body: { error: "Erro no servidor." } };
        }
    }
}
exports.FetchManyStatisticsController = FetchManyStatisticsController;
//# sourceMappingURL=fetch-many-statistics.controlller.js.map