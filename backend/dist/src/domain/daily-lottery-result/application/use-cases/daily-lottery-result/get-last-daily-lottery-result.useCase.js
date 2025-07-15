"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLastDailyResultUseCase = void 0;
const lottery_result_1 = require("../../../enterprise/entities/lottery-result");
const daily_lottery_result_1 = require("../../../enterprise/entities/daily-lottery-result");
const not_found_error_1 = require("../../../../../core/errors/common/not-found.error");
class GetLastDailyResultUseCase {
    dailyResultRepository;
    constructor(dailyResultRepository) {
        this.dailyResultRepository = dailyResultRepository;
    }
    async execute() {
        const lastDailyResult = await this.dailyResultRepository.getLast();
        if (!lastDailyResult) {
            throw new not_found_error_1.NotFoundError("Não há resultados ainda.");
        }
        const dailyResult = this.createDailyResult(lastDailyResult);
        return dailyResult;
    }
    createDailyResult(data) {
        return daily_lottery_result_1.DailyLotteryResult.create({
            id: data.id,
            date: data.date,
            createdAt: data.createdAt,
            formatedDate: data.formatedDate,
            results: data.results.map((result) => lottery_result_1.LotteryResult.create({
                id: result.id,
                hour: result.hour,
                name: result.name,
                dailyId: result.dailyId,
                number_1: result.number_1,
                videoURL: result.videoURL,
                number_2: result.number_2,
                number_3: result.number_3,
                number_4: result.number_4,
                number_5: result.number_5,
                createdAt: result.createdAt,
            })),
        });
    }
}
exports.GetLastDailyResultUseCase = GetLastDailyResultUseCase;
//# sourceMappingURL=get-last-daily-lottery-result.useCase.js.map