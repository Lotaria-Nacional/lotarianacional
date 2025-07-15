"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateJobOppeningUseCase = void 0;
const job_oppening_1 = require("../../../enterprise/entities/job-oppening");
class CreateJobOppeningUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(data) {
        const { department, requirements, quantity, responsabilities, title, description } = data;
        const jobOppening = job_oppening_1.JobOppening.create({
            title,
            department,
            quantity,
            description,
            requirements,
            responsabilities,
        });
        await this.repository.create(jobOppening);
    }
}
exports.CreateJobOppeningUseCase = CreateJobOppeningUseCase;
//# sourceMappingURL=create-job-oppening.useCase.js.map