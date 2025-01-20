"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetNewsUseCase = void 0;
class GetNewsUseCase {
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
exports.GetNewsUseCase = GetNewsUseCase;
