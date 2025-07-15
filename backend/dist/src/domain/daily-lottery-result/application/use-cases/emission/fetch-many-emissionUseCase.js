"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManyEmissionUseCase = void 0;
class FetchManyEmissionUseCase {
    emissionRepository;
    constructor(emissionRepository) {
        this.emissionRepository = emissionRepository;
    }
    async execute() {
        try {
            const emissions = await this.emissionRepository.getAll();
            return emissions;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.FetchManyEmissionUseCase = FetchManyEmissionUseCase;
//# sourceMappingURL=fetch-many-emissionUseCase.js.map