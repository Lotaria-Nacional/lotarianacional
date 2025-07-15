"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManyDailyLotteryResultsUseCase = void 0;
const lottery_result_1 = require("../../../../../domain/daily-lottery-result/enterprise/entities/lottery-result");
const daily_lottery_result_1 = require("../../../../../domain/daily-lottery-result/enterprise/entities/daily-lottery-result");
class FetchManyDailyLotteryResultsUseCase {
    dailyResultsRepository;
    constructor(dailyResultsRepository) {
        this.dailyResultsRepository = dailyResultsRepository;
    }
    async execute() {
        const results = await this.dailyResultsRepository.fetchMany();
        return results.map((result) => daily_lottery_result_1.DailyLotteryResult.create({
            id: result.id,
            date: result.date,
            createdAt: result.createdAt,
            formatedDate: result.formatedDate,
            results: result.results.map((res) => lottery_result_1.LotteryResult.create({
                id: res.id,
                hour: res.hour,
                name: res.name,
                dailyId: res.dailyId,
                number_1: res.number_1,
                number_2: res.number_2,
                number_3: res.number_3,
                number_4: res.number_4,
                number_5: res.number_5,
                videoURL: res.videoURL,
                createdAt: res.createdAt,
            })),
        }));
    }
}
exports.FetchManyDailyLotteryResultsUseCase = FetchManyDailyLotteryResultsUseCase;
//# sourceMappingURL=fetch-manny-daily-lottery-result.useCase.js.map