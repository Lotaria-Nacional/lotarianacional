"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePartnerJobOppeningUseCase = void 0;
const not_found_error_1 = require("../../../../../core/errors/common/not-found.error");
class DeletePartnerJobOppeningUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id) {
        const existingPartnerJobOppening = await this.repository.getById(id);
        if (!existingPartnerJobOppening) {
            throw new not_found_error_1.NotFoundError("A vaga não foi encontrada");
        }
        await this.repository.delete(existingPartnerJobOppening.id);
    }
}
exports.DeletePartnerJobOppeningUseCase = DeletePartnerJobOppeningUseCase;
//# sourceMappingURL=delete-partner-job-oppening.useCase.js.map