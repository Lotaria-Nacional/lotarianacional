"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPartnerJobOppeningByIdUseCase = void 0;
const not_found_error_1 = require("../../../../../core/errors/common/not-found.error");
class GetPartnerJobOppeningByIdUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id) {
        const existingJobOppening = await this.repository.getById(id);
        console.log("use case called");
        if (!existingJobOppening) {
            throw new not_found_error_1.NotFoundError("A vaga não foi encontrada");
        }
        await this.repository.getById(existingJobOppening.id);
        return existingJobOppening;
    }
}
exports.GetPartnerJobOppeningByIdUseCase = GetPartnerJobOppeningByIdUseCase;
//# sourceMappingURL=get-partner-job-oppening-by-id.useCase.js.map