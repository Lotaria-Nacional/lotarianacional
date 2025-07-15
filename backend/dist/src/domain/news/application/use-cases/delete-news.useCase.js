"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteNewsUseCase = void 0;
// import { IFileUpload } from "../../../../core/contracts/file-upload.interface";
const not_found_error_1 = require("../../../../core/errors/common/not-found.error");
class DeleteNewsUseCase {
    newsRespository;
    constructor(newsRespository) {
        this.newsRespository = newsRespository;
    }
    async execute(id) {
        const existingNews = await this.newsRespository.getById(id);
        if (!existingNews)
            throw new not_found_error_1.NotFoundError("Notícia não encontrada.");
        // if (existingNews.image && typeof existingNews.image === "string") {
        //   const publicId = getCloudinaryPublicId(existingNews.image);
        //   if (publicId) {
        //     await this.fileUpload.delete(publicId, "image");
        //   }
        // }
        await this.newsRespository.delete(id);
    }
}
exports.DeleteNewsUseCase = DeleteNewsUseCase;
//# sourceMappingURL=delete-news.useCase.js.map