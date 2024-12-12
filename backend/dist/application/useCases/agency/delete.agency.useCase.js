"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAgencyUseCase = void 0;
const notFound_error_1 = require("../../../shared/errors/notFound.error");
class DeleteAgencyUseCase {
    constructor(agencyRepository) {
        this.agencyRepository = agencyRepository;
    }
    async execute(id) {
        const existingAgency = await this.agencyRepository.getById(id);
        if (!existingAgency)
            throw new notFound_error_1.NotFoundError("Agência não encontrada.");
        await this.agencyRepository.delete(id);
    }
}
exports.DeleteAgencyUseCase = DeleteAgencyUseCase;
