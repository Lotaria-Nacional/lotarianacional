"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateResultUseCase = void 0;
const notFound_error_1 = require("../../../shared/errors/notFound.error");
class UpdateResultUseCase {
    constructor(resultRepository) {
        this.resultRepository = resultRepository;
    }
    async execute(data) {
        const result = await this.resultRepository.getById(data.id);
        if (!result)
            throw new notFound_error_1.NotFoundError("Resultado não encontrado.");
        result.update(data.number_1, data.number_2, data.number_3, data.number_4, data.number_5);
        this.resultRepository.update(data);
        return result;
    }
}
exports.UpdateResultUseCase = UpdateResultUseCase;
