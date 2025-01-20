"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAgenciesUseCase = void 0;
class GetAgenciesUseCase {
    constructor(agencyRespository) {
        this.agencyRespository = agencyRespository;
    }
    async execute(data) {
        const { page, pageSize } = data;
        try {
            const result = await this.agencyRespository.getAll(page, pageSize);
            return result;
        }
        catch (error) {
            console.log("GetAgenciesUseCase ~ execute ~ error", error);
            throw new Error("Erro ao recuperar agências. Tente novamente mais tarde.");
        }
    }
}
exports.GetAgenciesUseCase = GetAgenciesUseCase;
