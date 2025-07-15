"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteLotteryResultUseCase = void 0;
const not_found_error_1 = require("../../../../../core/errors/common/not-found.error");
class DeleteLotteryResultUseCase {
    resultRepository;
    constructor(resultRepository) {
        this.resultRepository = resultRepository;
    }
    async execute(id) {
        const result = await this.resultRepository.getById(id);
        if (!result)
            throw new not_found_error_1.NotFoundError("Resultado não encontrado.");
        await this.resultRepository.delete(id);
    }
}
exports.DeleteLotteryResultUseCase = DeleteLotteryResultUseCase;
//# sourceMappingURL=delete-lottery-result.useCase.js.map