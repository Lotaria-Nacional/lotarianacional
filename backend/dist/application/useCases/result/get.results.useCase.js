"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetResultsUseCase = void 0;
// import { Result } from "../../../domain/entities/result/result"
// import { IResultRepository } from "../../../domain/entities/result/result.respository"
class GetResultsUseCase {
    constructor(dailyResultRepository) {
        this.dailyResultRepository = dailyResultRepository;
    }
    async execute() {
        const results = await this.dailyResultRepository.getAll();
        if (results.length === 0)
            return [];
        return results;
    }
}
exports.GetResultsUseCase = GetResultsUseCase;
