"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetResultsUseCase = void 0;
const Result_1 = require("../../../Domain/Entities/Result/Result");
class GetResultsUseCase {
    constructor(resultRespository) {
        this.resultRespository = resultRespository;
    }
    async execute() {
        const results = await this.resultRespository.getAll();
        return results.map((result) => Result_1.Result.create({
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
exports.GetResultsUseCase = GetResultsUseCase;
