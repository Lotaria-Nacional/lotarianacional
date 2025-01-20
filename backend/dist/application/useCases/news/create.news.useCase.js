"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNewsUseCase = void 0;
const News_1 = require("../../../Domain/Entities/News/News");
class CreateNewsUseCase {
    constructor(newsRepository, fileUpload) {
        this.newsRepository = newsRepository;
        this.fileUpload = fileUpload;
    }
    async execute(data) {
        const imageURL = await this.fileUpload.upload(data.image, "lotaria_nacional/news");
        const news = News_1.News.create({ ...data, image: imageURL });
        await this.newsRepository.save(news);
    }
}
exports.CreateNewsUseCase = CreateNewsUseCase;
