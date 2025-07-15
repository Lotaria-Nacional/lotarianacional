"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAgencyUseCase = void 0;
const agency_entity_1 = require("../../enterprise/entities/agency.entity");
class CreateAgencyUseCase {
    agencyRepository;
    constructor(agencyRepository) {
        this.agencyRepository = agencyRepository;
    }
    async execute(data) {
        const agency = agency_entity_1.Agency.create({
            name: data.name,
            latitude: data.latitude,
            longitude: data.longitude,
            location_text: data.location_text,
            type: data.type,
            phone: data.phone,
        });
        await this.agencyRepository.create(agency);
    }
}
exports.CreateAgencyUseCase = CreateAgencyUseCase;
//# sourceMappingURL=create-agency.useCase.js.map