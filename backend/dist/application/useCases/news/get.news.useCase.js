"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetNewsUseCase = void 0;
class GetNewsUseCase {
    constructor(newsRepository) {
        this.newsRepository = newsRepository;
    }
    async execute() {
        const news = await this.newsRepository.getAll();
        return news;
    }
}
exports.GetNewsUseCase = GetNewsUseCase;
