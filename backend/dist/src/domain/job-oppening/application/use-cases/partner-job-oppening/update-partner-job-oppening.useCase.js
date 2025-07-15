"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePartnerJobOppeningUseCase = void 0;
const not_found_error_1 = require("../../../../../core/errors/common/not-found.error");
const helpers_1 = require("../../../../../core/either/helpers");
class UpdatePartnerJobOppeningUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(data) {
        const existingJobOppening = await this.repository.getById(data.id);
        if (!existingJobOppening) {
            throw new not_found_error_1.NotFoundError("A vaga não foi encontrada");
        }
        existingJobOppening.update(data);
        await this.repository.save(existingJobOppening);
        return (0, helpers_1.right)({});
    }
}
exports.UpdatePartnerJobOppeningUseCase = UpdatePartnerJobOppeningUseCase;
//# sourceMappingURL=update-partner-job-oppening.useCase.js.map