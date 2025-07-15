"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLotteryResultController = void 0;
const zod_1 = require("zod");
const not_found_error_1 = require("../../../../../core/errors/common/not-found.error");
class UpdateLotteryResultController {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(req) {
        const resultIdSchema = zod_1.z.string();
        const updateResultSchema = zod_1.z.object({
            videoURL: zod_1.z.string().optional(),
        });
        try {
            const id = resultIdSchema.parse(req.params.id);
            const data = updateResultSchema.parse(req.body);
            const updated = {
                id,
                videoURL: data.videoURL,
            };
            const result = await this.useCase.execute(updated);
            return { statusCode: 200, body: { message: "Atualizado com sucesso.", data: result } };
        }
        catch (error) {
            if (error instanceof not_found_error_1.NotFoundError) {
                return { statusCode: 404, body: { message: error.message } };
            }
            return { statusCode: 500, body: { message: "Erro interno no servidor." } };
        }
    }
}
exports.UpdateLotteryResultController = UpdateLotteryResultController;
//# sourceMappingURL=update-lottery-result.controller.js.map