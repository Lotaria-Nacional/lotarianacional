"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAgencyController = void 0;
const zod_1 = require("zod");
const notFound_error_1 = require("../../../../shared/errors/notFound.error");
class UpdateAgencyController {
    constructor(updateAgencyUseCase) {
        this.updateAgencyUseCase = updateAgencyUseCase;
    }
    async handle(req, res) {
        const { id } = req.params;
        const updateAgencySchema = zod_1.z.object({
            name: zod_1.z.string().optional(),
            phone: zod_1.z.number().optional(),
            location_text: zod_1.z.string().optional(),
            latitude: zod_1.z.number().optional(),
            longitude: zod_1.z.number().optional(),
        });
        try {
            const data = updateAgencySchema.parse(req.body);
            const updatedAgency = await this.updateAgencyUseCase.execute(id, data);
            return res.status(200).json({ message: "Atualizado com sucesso.", data: updatedAgency });
        }
        catch (error) {
            if (error instanceof notFound_error_1.NotFoundError) {
                return res.status(404).json({ message: error.message });
            }
            return res.status(500).json({ message: "Erro interno no servidor." });
        }
    }
}
exports.UpdateAgencyController = UpdateAgencyController;
