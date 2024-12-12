"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNewsController = void 0;
const zod_1 = require("zod");
const notFound_error_1 = require("../../../../shared/errors/notFound.error");
class UpdateNewsController {
    constructor(updateNewsUseCase) {
        this.updateNewsUseCase = updateNewsUseCase;
    }
    async handle(req, res) {
        const { id } = req.params;
        const fileImage = req.file?.buffer;
        const updateNewsSchema = zod_1.z.object({
            image: zod_1.z.any().optional(),
            title: zod_1.z.string().optional(),
            description: zod_1.z.string().optional(),
        });
        try {
            const newsData = updateNewsSchema.parse(req.body);
            console.log(newsData);
            const updatedNews = await this.updateNewsUseCase.execute(id, {
                ...newsData,
                image: fileImage,
            });
            return res
                .status(200)
                .json({ message: "Atualizado com sucesso", data: updatedNews });
        }
        catch (error) {
            if (error instanceof notFound_error_1.NotFoundError) {
                return res.status(404).json({ message: error.message });
            }
            return res.status(500).json({ message: "Erro interno no servidor." });
        }
    }
}
exports.UpdateNewsController = UpdateNewsController;
