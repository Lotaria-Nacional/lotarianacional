"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteJobOppeningUseCase = void 0;
const not_found_error_1 = require("../../../../../core/errors/common/not-found.error");
class DeleteJobOppeningUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id) {
        const existingJobOppening = await this.repository.getById(id);
        if (!existingJobOppening) {
            throw new not_found_error_1.NotFoundError("A vaga não foi encontrada");
        }
        await this.repository.delete(existingJobOppening.id);
    }
}
exports.DeleteJobOppeningUseCase = DeleteJobOppeningUseCase;
//# sourceMappingURL=delete-job-oppening.useCase.js.map