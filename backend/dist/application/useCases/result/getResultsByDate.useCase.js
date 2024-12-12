"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetResultsByDateUseCase = void 0;
class GetResultsByDateUseCase {
    constructor(resultRespository) {
        this.resultRespository = resultRespository;
    }
    async execute() {
        const today = new Date().toISOString();
    }
}
exports.GetResultsByDateUseCase = GetResultsByDateUseCase;
