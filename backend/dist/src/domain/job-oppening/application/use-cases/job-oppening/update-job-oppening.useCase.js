"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateJobOppeningUseCase = void 0;
const helpers_1 = require("../../../../../core/either/helpers");
const not_found_error_1 = require("../../../../../core/errors/common/not-found.error");
class UpdateJobOppeningUseCase {
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
exports.UpdateJobOppeningUseCase = UpdateJobOppeningUseCase;
//# sourceMappingURL=update-job-oppening.useCase.js.map