"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteResultUseCase = void 0;
const notFound_error_1 = require("../../../shared/errors/notFound.error");
class DeleteResultUseCase {
    constructor(resultRepository) {
        this.resultRepository = resultRepository;
    }
    async execute(id) {
        const result = await this.resultRepository.getById(id);
        if (!result)
            throw new notFound_error_1.NotFoundError("Resultado não encontrado.");
        await this.resultRepository.delete(id);
    }
}
exports.DeleteResultUseCase = DeleteResultUseCase;
