"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateResultController = void 0;
const zod_1 = require("zod");
const notFound_error_1 = require("../../../../shared/errors/notFound.error");
const resultLimitExceeded_exception_1 = require("../../../../Domain/exceptions/resultLimitExceeded.exception");
class CreateResultController {
    constructor(createResultUseCase) {
        this.createResultUseCase = createResultUseCase;
    }
    async handle(req, res) {
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
            await this.createResultUseCase.execute(resultData);
            return res.status(201).json({ message: "Criado com sucesso." });
        }
        catch (error) {
            if (error instanceof zod_1.z.ZodError) {
                return res.status(400).json({ message: error.errors[0].message });
            }
            if (error instanceof resultLimitExceeded_exception_1.ResultLimitException) {
                return res.status(400).json({ message: error.message });
            }
            if (error instanceof notFound_error_1.NotFoundError) {
                return res.status(404).json({ message: error.message });
            }
            return res.status(500).json({ message: "Erro interno do servidor...", error: error });
        }
    }
}
exports.CreateResultController = CreateResultController;
