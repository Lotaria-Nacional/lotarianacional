"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteNewsUseCase = void 0;
const notFound_error_1 = require("../../../shared/errors/notFound.error");
const get_cloudinaryPublicId_1 = require("../../../utils/get.cloudinaryPublicId");
class DeleteNewsUseCase {
    constructor(newsRespository, fileUpload) {
        this.newsRespository = newsRespository;
        this.fileUpload = fileUpload;
    }
    async execute(id) {
        const existingNews = await this.newsRespository.getById(id);
        if (!existingNews)
            throw new notFound_error_1.NotFoundError("Notícia não encontrada.");
        if (existingNews.image && typeof existingNews.image === "string") {
            const publicId = (0, get_cloudinaryPublicId_1.getCloudinaryPublicId)(existingNews.image);
            if (publicId) {
                await this.fileUpload.delete(publicId);
            }
        }
        await this.newsRespository.delete(id);
    }
}
exports.DeleteNewsUseCase = DeleteNewsUseCase;
