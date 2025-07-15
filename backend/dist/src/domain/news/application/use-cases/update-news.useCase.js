"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNewsUseCase = void 0;
const not_found_error_1 = require("../../../../core/errors/common/not-found.error");
// import { IFileUpload } from "../../../../core/contracts/file-upload.interface";
// import { getCloudinaryPublicId } from "../../../../shared/utils/get-cloudinary-public-id";
class UpdateNewsUseCase {
    newsRepository;
    constructor(newsRepository) {
        this.newsRepository = newsRepository;
    }
    async execute(data) {
        const news = await this.newsRepository.getById(data.id);
        if (!news)
            throw new not_found_error_1.NotFoundError("Notícia não encontrada.");
        // if (data.image) {
        //   let newImage: string | Buffer;
        //   if (news.image && typeof news.image === "string") {
        //     const publicId = getCloudinaryPublicId(news.image);
        //     if (publicId) {
        //       await this.fileUpload.delete(publicId, "image");
        //     }
        //   }
        //   newImage = await this.fileUpload.upload(data.image!, "lotaria_nacional/news", "image");
        //   news.update({ ...data, image: newImage });
        //   await this.newsRepository.save(news);
        // } else {
        // }
        news.update(data);
        await this.newsRepository.save(news);
        return news;
    }
}
exports.UpdateNewsUseCase = UpdateNewsUseCase;
//# sourceMappingURL=update-news.useCase.js.map