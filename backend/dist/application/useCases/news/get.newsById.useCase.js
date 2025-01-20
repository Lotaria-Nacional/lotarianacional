"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetNewsByIdUseCase = void 0;
const News_1 = require("../../../Domain/Entities/News/News");
const notFound_error_1 = require("../../../shared/errors/notFound.error");
class GetNewsByIdUseCase {
    constructor(newsRepository) {
        this.newsRepository = newsRepository;
    }
    async execute(id) {
        const data = await this.newsRepository.getById(id);
        if (!data)
            throw new notFound_error_1.NotFoundError("Notícia não encontrada.");
        return News_1.News.create({
            id: data.id,
            title: data.title,
            image: data.image,
            createdAt: data.createdAt,
            description: data.description,
        });
    }
}
exports.GetNewsByIdUseCase = GetNewsByIdUseCase;
