"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLotteryResultUseCase = void 0;
const lottery_result_1 = require("../../../../../domain/daily-lottery-result/enterprise/entities/lottery-result");
class CreateLotteryResultUseCase {
    resultRepository;
    constructor(resultRepository) {
        this.resultRepository = resultRepository;
    }
    async execute(data) {
        const result = lottery_result_1.LotteryResult.create({
            hour: data.hour,
            name: data.name,
            videoURL: data.videoURL,
            number_1: data.number_1,
            number_2: data.number_2,
            number_3: data.number_3,
            number_4: data.number_4,
            number_5: data.number_5,
        });
        await this.resultRepository.save(result);
    }
}
exports.CreateLotteryResultUseCase = CreateLotteryResultUseCase;
//# sourceMappingURL=create-lottery-result.useCase.js.map