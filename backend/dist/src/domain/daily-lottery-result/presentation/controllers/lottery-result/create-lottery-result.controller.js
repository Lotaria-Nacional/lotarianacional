"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLotteryResultController = void 0;
const zod_1 = require("zod");
const resultLimitExceeded_exception_1 = require("../../../exceptions/resultLimitExceeded.exception");
const not_found_error_1 = require("../../../../../core/errors/common/not-found.error");
class CreateLotteryResultController {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(req) {
        const createResultSchema = zod_1.z.object({
            name: zod_1.z.string(),
            hour: zod_1.z.string(),
            videoURL: zod_1.z.string(),
            number_1: zod_1.z.number(),
            number_2: zod_1.z.number(),
            number_3: zod_1.z.number(),
            number_4: zod_1.z.number(),
            number_5: zod_1.z.number(),
        });
        try {
            const resultData = createResultSchema.parse(req.body);
            await this.useCase.execute(resultData);
            return { statusCode: 201, body: { message: "Criado com sucesso." } };
        }
        catch (error) {
            if (error instanceof zod_1.z.ZodError) {
                return { statusCode: 400, body: { message: error.errors[0].message } };
            }
            if (error instanceof resultLimitExceeded_exception_1.ResultLimitException) {
                return { statusCode: 400, body: { message: error.message } };
            }
            if (error instanceof not_found_error_1.NotFoundError) {
                return { statusCode: 404, body: { message: error.message } };
            }
            return { statusCode: 500, body: { message: "Erro interno do servidor...", error: error } };
        }
    }
}
exports.CreateLotteryResultController = CreateLotteryResultController;
//# sourceMappingURL=create-lottery-result.controller.js.map