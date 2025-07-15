"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAgencyUseCase = void 0;
const not_found_error_1 = require("../../../../core/errors/common/not-found.error");
class UpdateAgencyUseCase {
    agencyRepository;
    constructor(agencyRepository) {
        this.agencyRepository = agencyRepository;
    }
    async execute(data) {
        const existingAgency = await this.agencyRepository.getById(data.id);
        if (!existingAgency)
            new not_found_error_1.NotFoundError("Agência não encontrada.");
        const agency = await this.agencyRepository.save(data);
        return agency;
    }
}
exports.UpdateAgencyUseCase = UpdateAgencyUseCase;
//# sourceMappingURL=update-agency.useCase.js.map