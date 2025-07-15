"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManyNewsUseCase = void 0;
class FetchManyNewsUseCase {
    newsRepository;
    constructor(newsRepository) {
        this.newsRepository = newsRepository;
    }
    async execute(data) {
        const { page, pageSize } = data;
        try {
            const news = await this.newsRepository.getAll(page, pageSize);
            return news;
        }
        catch (error) {
            console.log("GetNewsUseCase ~ execute ~ error", error);
            throw new Error("Não foi possível listar as news");
        }
    }
}
exports.FetchManyNewsUseCase = FetchManyNewsUseCase;
//# sourceMappingURL=fetch-many-news.useCase.js.map