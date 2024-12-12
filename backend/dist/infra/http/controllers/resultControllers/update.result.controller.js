"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateResultController = void 0;
const zod_1 = require("zod");
const notFound_error_1 = require("../../../../shared/errors/notFound.error");
class UpdateResultController {
    constructor(updateResultUseCase) {
        this.updateResultUseCase = updateResultUseCase;
    }
    async handle(req, res) {
        const resultIdSchema = zod_1.z.string();
        const updateResultSchema = zod_1.z.object({
            number_1: zod_1.z.number().int().optional(),
            number_2: zod_1.z.number().int().optional(),
            number_3: zod_1.z.number().int().optional(),
            number_4: zod_1.z.number().int().optional(),
            number_5: zod_1.z.number().int().optional(),
        });
        try {
            const id = resultIdSchema.parse(req.params.id);
            const data = updateResultSchema.parse(req.body);
            const updated = {
                id,
                number_1: data.number_1,
                number_2: data.number_2,
                number_3: data.number_3,
                number_4: data.number_4,
                number_5: data.number_5,
            };
            const result = await this.updateResultUseCase.execute(updated);
            return res
                .status(200)
                .json({ message: "Atualizado com sucesso.", data: result });
        }
        catch (error) {
            if (error instanceof notFound_error_1.NotFoundError) {
                return res.status(404).json({ message: error.message });
            }
            return res.status(500).json({ message: "Erro interno no servidor." });
        }
    }
}
exports.UpdateResultController = UpdateResultController;
