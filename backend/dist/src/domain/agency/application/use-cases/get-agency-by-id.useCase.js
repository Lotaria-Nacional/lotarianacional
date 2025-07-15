"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAgencyByIdUseCase = void 0;
const not_found_error_1 = require("../../../../core/errors/common/not-found.error");
class GetAgencyByIdUseCase {
    agencyRepository;
    constructor(agencyRepository) {
        this.agencyRepository = agencyRepository;
    }
    async execute(id) {
        const agency = this.agencyRepository.getById(id);
        if (!agency)
            throw new not_found_error_1.NotFoundError("Agência não foi encontrada.");
        return agency;
    }
}
exports.GetAgencyByIdUseCase = GetAgencyByIdUseCase;
//# sourceMappingURL=get-agency-by-id.useCase.js.map