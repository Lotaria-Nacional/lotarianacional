"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNewsUseCase = void 0;
const news_1 = require("../../enterprise/entities/news");
class CreateNewsUseCase {
    newsRepository;
    fileUpload;
    constructor(newsRepository, fileUpload) {
        this.newsRepository = newsRepository;
        this.fileUpload = fileUpload;
    }
    async execute(data) {
        const news = news_1.News.create({ ...data, image: "" });
        await this.newsRepository.save(news);
    }
}
exports.CreateNewsUseCase = CreateNewsUseCase;
//# sourceMappingURL=create-news.useCase.js.map