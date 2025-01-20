"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAgenciesController = void 0;
class GetAgenciesController {
    constructor(getAgenciesUseCase) {
        this.getAgenciesUseCase = getAgenciesUseCase;
    }
    async handle(req, res) {
        const { page = 1, pageSize = 10 } = req.query;
        try {
            const agencies = await this.getAgenciesUseCase.execute({
                page: parseInt(page, 10),
                pageSize: parseInt(pageSize, 10),
            });
            return res.status(200).json(agencies);
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}
exports.GetAgenciesController = GetAgenciesController;
