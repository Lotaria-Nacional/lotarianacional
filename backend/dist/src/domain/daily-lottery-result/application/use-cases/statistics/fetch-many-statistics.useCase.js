"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManyStatisticsUseCase = void 0;
const statistic_1 = require("../../../../../domain/daily-lottery-result/enterprise/entities/statistic");
class FetchManyStatisticsUseCase {
    statisticRepository;
    constructor(statisticRepository) {
        this.statisticRepository = statisticRepository;
    }
    async execute() {
        try {
            const statistic = await this.statisticRepository.get();
            if (!statistic)
                return null;
            return statistic_1.Statistic.create({
                id: statistic?.id,
                file: statistic?.file,
                statsData: statistic.statsData,
                createdAt: statistic?.createdAt,
            });
        }
        catch (error) {
            throw error;
        }
    }
}
exports.FetchManyStatisticsUseCase = FetchManyStatisticsUseCase;
//# sourceMappingURL=fetch-many-statistics.useCase.js.map