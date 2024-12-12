"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAgencyUseCase = void 0;
const notFound_error_1 = require("../../../shared/errors/notFound.error");
class UpdateAgencyUseCase {
    constructor(agencyRepository) {
        this.agencyRepository = agencyRepository;
    }
    async execute(id, data) {
        const existingAgency = await this.agencyRepository.getById(id);
        if (!existingAgency)
            new notFound_error_1.NotFoundError("Agência não encontrada.");
        const agency = await this.agencyRepository.update(id, data);
        return agency;
    }
}
exports.UpdateAgencyUseCase = UpdateAgencyUseCase;
