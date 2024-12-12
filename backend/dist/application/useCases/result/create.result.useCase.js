"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateResultUseCase = void 0;
const result_1 = require("../../../domain/entities/result/result");
const resultLimitExceeded_exception_1 = require("../../../domain/exceptions/resultLimitExceeded.exception");
class CreateResultUseCase {
    constructor(dailyResultRespository) {
        this.dailyResultRespository = dailyResultRespository;
    }
    async execute(data) {
        const today = new Date().toISOString().split("T")[0];
        let dailyResult = await this.dailyResultRespository.getByDate(today);
        if (!dailyResult) {
            dailyResult = {
                date: today,
                results: [],
            };
        }
        if (dailyResult.results.length >= 4) {
            throw new resultLimitExceeded_exception_1.ResultLimitException();
        }
        const newResult = result_1.Result.create({
            name: data.name,
            hour: data.hour,
            number_1: data.number_1,
            number_2: data.number_2,
            number_3: data.number_3,
            number_4: data.number_4,
            number_5: data.number_5,
        });
        dailyResult.results.push(newResult);
        if (dailyResult.id) {
            await this.dailyResultRespository.update(dailyResult);
        }
        else {
            await this.dailyResultRespository.save(dailyResult);
        }
    }
}
exports.CreateResultUseCase = CreateResultUseCase;
