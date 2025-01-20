"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetResultsController = void 0;
class GetResultsController {
    constructor(getResultsUseCase) {
        this.getResultsUseCase = getResultsUseCase;
    }
    async handle(req, res) {
        try {
            const results = await this.getResultsUseCase.execute();
            const total = results.length;
            return res.status(200).json({ results, total: total });
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}
exports.GetResultsController = GetResultsController;
