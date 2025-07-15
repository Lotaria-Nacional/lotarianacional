"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePartnerJobOppeningUseCase = void 0;
const partner_job_oppening_1 = require("../../../enterprise/entities/partner-job-oppening");
class CreatePartnerJobOppeningUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(data) {
        const { location, type, requirements, quantity, responsabilities, title, description } = data;
        const partnerJobOppening = partner_job_oppening_1.PartnerJobOppening.create({
            title,
            location,
            type,
            quantity,
            description,
            requirements,
            responsabilities,
        });
        await this.repository.create(partnerJobOppening);
    }
}
exports.CreatePartnerJobOppeningUseCase = CreatePartnerJobOppeningUseCase;
//# sourceMappingURL=create-partner-job-oppening.useCase.js.map