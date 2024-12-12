"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBannerController = void 0;
const zod_1 = require("zod");
class CreateBannerController {
    constructor(createBannerUseCase) {
        this.createBannerUseCase = createBannerUseCase;
    }
    async handle(req, res) {
        const createBannerSchema = zod_1.z.object({
            desktop_banner_1: zod_1.z.any(),
        });
        try {
            const data = createBannerSchema.parse(req.body);
            await this.createBannerUseCase.execute(data);
            return res.status(201).json({ message: "Criado com sucesso." });
        }
        catch (error) {
            if (error instanceof zod_1.z.ZodError) {
                return res.status(400).json({ message: error.errors[0].message });
            }
            return res.status(500).json({ message: "Erro no servidor" });
        }
    }
}
exports.CreateBannerController = CreateBannerController;
