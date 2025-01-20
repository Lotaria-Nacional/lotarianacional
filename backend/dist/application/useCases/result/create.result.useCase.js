"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateResultUseCase = void 0;
const Result_1 = require("../../../Domain/Entities/Result/Result");
class CreateResultUseCase {
    constructor(resultRepository) {
        this.resultRepository = resultRepository;
    }
    async execute(data) {
        const result = Result_1.Result.create({
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
exports.CreateResultUseCase = CreateResultUseCase;
