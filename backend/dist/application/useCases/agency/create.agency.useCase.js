"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAgencyUseCase = void 0;
const Agency_1 = require("../../../Domain/Entities/Agency/Agency");
class CreateAgencyUseCase {
    constructor(agencyRepository) {
        this.agencyRepository = agencyRepository;
    }
    async execute(data) {
        const agency = Agency_1.Agency.create({
            name: data.name,
            latitude: data.latitude,
            longitude: data.longitude,
            location_text: data.location_text,
            phone: data.phone,
        });
        await this.agencyRepository.save(agency);
    }
}
exports.CreateAgencyUseCase = CreateAgencyUseCase;
