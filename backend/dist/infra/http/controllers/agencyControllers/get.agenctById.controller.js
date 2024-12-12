"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAgencyByIdController = void 0;
const notFound_error_1 = require("../../../../shared/errors/notFound.error");
class GetAgencyByIdController {
    constructor(getAgencyByIdUseCase) {
        this.getAgencyByIdUseCase = getAgencyByIdUseCase;
    }
    async handle(req, res) {
        const { id } = req.params;
        try {
            const agency = await this.getAgencyByIdUseCase.execute(id);
            return res.status(200).json(agency);
        }
        catch (error) {
            if (error instanceof notFound_error_1.NotFoundError) {
                return res.status(404).json({ message: error.message });
            }
            return res.status(500).json({ message: "Erro interno no servidor." });
        }
    }
}
exports.GetAgencyByIdController = GetAgencyByIdController;
