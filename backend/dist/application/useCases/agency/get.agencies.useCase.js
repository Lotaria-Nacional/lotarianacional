"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAgenciesUseCase = void 0;
class GetAgenciesUseCase {
    constructor(agencyRespository) {
        this.agencyRespository = agencyRespository;
    }
    async execute() {
        const results = await this.agencyRespository.getAll();
        return results;
    }
}
exports.GetAgenciesUseCase = GetAgenciesUseCase;
