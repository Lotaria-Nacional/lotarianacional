"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetNewsByIdUseCase = void 0;
const not_found_error_1 = require("../../../../core/errors/common/not-found.error");
const news_1 = require("../../enterprise/entities/news");
class GetNewsByIdUseCase {
    newsRepository;
    constructor(newsRepository) {
        this.newsRepository = newsRepository;
    }
    async execute(id) {
        const data = await this.newsRepository.getById(id);
        if (!data)
            throw new not_found_error_1.NotFoundError("Notícia não encontrada.");
        return news_1.News.create({
            id: data.id,
            title: data.title,
            image: data.image,
            createdAt: data.createdAt,
            description: data.description,
        });
    }
}
exports.GetNewsByIdUseCase = GetNewsByIdUseCase;
//# sourceMappingURL=get-news-by-id.useCase.js.map