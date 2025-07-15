"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAgencyUseCase = void 0;
const not_found_error_1 = require("../../../../core/errors/common/not-found.error");
class DeleteAgencyUseCase {
    agencyRepository;
    constructor(agencyRepository) {
        this.agencyRepository = agencyRepository;
    }
    async execute(id) {
        const existingAgency = await this.agencyRepository.getById(id);
        if (!existingAgency)
            throw new not_found_error_1.NotFoundError("Agência não encontrada.");
        await this.agencyRepository.delete(id);
    }
}
exports.DeleteAgencyUseCase = DeleteAgencyUseCase;
//# sourceMappingURL=delete-agency.useCase.js.map