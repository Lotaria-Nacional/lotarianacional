"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManyAgenciesUseCase = void 0;
class FetchManyAgenciesUseCase {
    agencyRespository;
    constructor(agencyRespository) {
        this.agencyRespository = agencyRespository;
    }
    async execute() {
        try {
            const result = await this.agencyRespository.getAll();
            return result;
        }
        catch (error) {
            console.log("GetAgenciesUseCase ~ execute ~ error", error);
            throw new Error("Erro ao recuperar agências. Tente novamente mais tarde.");
        }
    }
}
exports.FetchManyAgenciesUseCase = FetchManyAgenciesUseCase;
//# sourceMappingURL=fetch-many-agencies.useCase.js.map