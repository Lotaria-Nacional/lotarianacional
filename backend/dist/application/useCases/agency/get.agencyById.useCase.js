"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAgencyByIdUseCase = void 0;
const notFound_error_1 = require("../../../shared/errors/notFound.error");
class GetAgencyByIdUseCase {
    constructor(agencyRepository) {
        this.agencyRepository = agencyRepository;
    }
    async execute(id) {
        const agency = this.agencyRepository.getById(id);
        if (!agency)
            throw new notFound_error_1.NotFoundError("Agência não foi encontrada.");
        return agency;
    }
}
exports.GetAgencyByIdUseCase = GetAgencyByIdUseCase;
