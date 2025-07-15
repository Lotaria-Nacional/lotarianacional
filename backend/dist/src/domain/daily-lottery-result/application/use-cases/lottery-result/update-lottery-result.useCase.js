"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLotteryResultUseCase = void 0;
const not_found_error_1 = require("../../../../../core/errors/common/not-found.error");
const emission_entity_1 = require("../../../../../domain/daily-lottery-result/enterprise/entities/emission.entity");
class UpdateLotteryResultUseCase {
    resultRepository;
    emissionRepository;
    constructor(resultRepository, emissionRepository) {
        this.resultRepository = resultRepository;
        this.emissionRepository = emissionRepository;
    }
    async execute(data) {
        const result = await this.resultRepository.getById(data.id);
        if (!result)
            throw new not_found_error_1.NotFoundError("Resultado não encontrado.");
        result.update(data);
        await this.resultRepository.update(data);
        if (data.videoURL) {
            const emission = emission_entity_1.Emission.create({
                description: result.name,
                url: data.videoURL,
            });
            await this.emissionRepository.save(emission);
        }
        return result;
    }
    hasValidVideoURL(url) {
        return typeof url === "string";
    }
}
exports.UpdateLotteryResultUseCase = UpdateLotteryResultUseCase;
//# sourceMappingURL=update-lottery-result.useCase.js.map