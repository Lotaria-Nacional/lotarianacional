"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNewsUseCase = void 0;
const notFound_error_1 = require("../../../shared/errors/notFound.error");
const get_cloudinaryPublicId_1 = require("../../../utils/get.cloudinaryPublicId");
class UpdateNewsUseCase {
    constructor(newsRepository, fileUpload) {
        this.newsRepository = newsRepository;
        this.fileUpload = fileUpload;
    }
    async execute(id, data) {
        const news = await this.newsRepository.getById(id);
        if (!news)
            throw new notFound_error_1.NotFoundError("Notícia não encontrada.");
        if (data.image) {
            let newImage;
            if (news.image && typeof news.image === "string") {
                const publicId = (0, get_cloudinaryPublicId_1.getCloudinaryPublicId)(news.image);
                if (publicId) {
                    await this.fileUpload.delete(publicId);
                }
            }
            newImage = await this.fileUpload.upload(data.image, "lotaria_nacional/news");
            news.update({ ...data, image: newImage });
            await this.newsRepository.update(id, news);
        }
        else {
            news.update(data);
            await this.newsRepository.update(id, news);
        }
        return news;
    }
}
exports.UpdateNewsUseCase = UpdateNewsUseCase;
