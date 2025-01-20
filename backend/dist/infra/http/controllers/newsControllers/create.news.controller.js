"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNewsController = void 0;
const zod_1 = require("zod");
class CreateNewsController {
    constructor(createNewsUseCase) {
        this.createNewsUseCase = createNewsUseCase;
    }
    async handle(req, res) {
        const fileImage = req.file?.buffer;
        const createNewsSchema = zod_1.z.object({
            image: zod_1.z.any(),
            title: zod_1.z.string().min(1, "O título é obrigatório."),
            description: zod_1.z.string().min(1, "A descrição é obrigatória."),
        });
        try {
            const newsData = createNewsSchema.parse(req.body);
            await this.createNewsUseCase.execute({ ...newsData, image: fileImage });
            return res.status(201).json({ message: "Criado com sucesso!" });
        }
        catch (error) {
            if (error instanceof zod_1.z.ZodError) {
                return res.status(400).json({ message: error.errors[0].message });
            }
            return res.status(400).json({ message: "Erro interno no servidor." });
        }
    }
}
exports.CreateNewsController = CreateNewsController;
