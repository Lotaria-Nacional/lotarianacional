"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManyLotteryResultsUseCase = void 0;
const lottery_result_1 = require("../../../../../domain/daily-lottery-result/enterprise/entities/lottery-result");
class FetchManyLotteryResultsUseCase {
    resultRespository;
    constructor(resultRespository) {
        this.resultRespository = resultRespository;
    }
    async execute() {
        const results = await this.resultRespository.getAll();
        return results.map((result) => lottery_result_1.LotteryResult.create({
            id: result.id,
            hour: result.hour,
            name: result.name,
            videoURL: result.videoURL,
            number_1: result.number_1,
            number_2: result.number_2,
            number_3: result.number_3,
            number_4: result.number_4,
            number_5: result.number_5,
        }));
    }
}
exports.FetchManyLotteryResultsUseCase = FetchManyLotteryResultsUseCase;
//# sourceMappingURL=fetch-many-lottery-result.useCase.js.map