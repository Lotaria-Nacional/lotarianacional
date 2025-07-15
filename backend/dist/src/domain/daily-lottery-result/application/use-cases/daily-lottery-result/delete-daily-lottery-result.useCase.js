"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDailyResultUseCase = void 0;
const not_found_error_1 = require("../../../../../core/errors/common/not-found.error");
class DeleteDailyResultUseCase {
    dailyResultRepository;
    constructor(dailyResultRepository) {
        this.dailyResultRepository = dailyResultRepository;
    }
    async execute(id) {
        const existingDailyResult = await this.dailyResultRepository.getById(id);
        if (!existingDailyResult) {
            throw new not_found_error_1.NotFoundError("Resultado diário não encontrado.");
        }
        await this.dailyResultRepository.delete(existingDailyResult.id);
    }
}
exports.DeleteDailyResultUseCase = DeleteDailyResultUseCase;
//# sourceMappingURL=delete-daily-lottery-result.useCase.js.map