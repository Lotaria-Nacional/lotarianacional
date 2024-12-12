"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAgenciesController = void 0;
class GetAgenciesController {
    constructor(getAgenciesUseCase) {
        this.getAgenciesUseCase = getAgenciesUseCase;
    }
    async handle(req, res) {
        try {
            const agencies = await this.getAgenciesUseCase.execute();
            return res.status(200).json(agencies);
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}
exports.GetAgenciesController = GetAgenciesController;
