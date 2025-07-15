"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetJobOppeningByIdUseCase = void 0;
const not_found_error_1 = require("../../../../../core/errors/common/not-found.error");
class GetJobOppeningByIdUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id) {
        const existingJobOppening = await this.repository.getById(id);
        if (!existingJobOppening) {
            throw new not_found_error_1.NotFoundError("A vaga não foi encontrada");
        }
        return existingJobOppening;
    }
}
exports.GetJobOppeningByIdUseCase = GetJobOppeningByIdUseCase;
//# sourceMappingURL=get-job-oppening-by-id.useCase.js.map