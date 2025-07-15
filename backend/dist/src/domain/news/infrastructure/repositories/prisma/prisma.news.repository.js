"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaNewsRespository = void 0;
const news_1 = require("../../../enterprise/entities/news");
class PrismaNewsRespository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(news) {
        await this.prisma.news.create({
            data: {
                title: news.title,
                createdAt: news.createdAt,
                image: news.image,
                description: news.description,
            },
        });
        console.log("infra reached");
    }
    async save(data) {
        const result = await this.prisma.news.update({
            where: { id: data.id },
            data: {
                title: data.title,
                description: data.description,
                image: data.image,
            },
        });
        return news_1.News.create({
            id: result.id,
            title: result.title,
            image: result.image,
            createdAt: result.createdAt,
            description: result.description,
        });
    }
    async delete(id) {
        await this.prisma.news.delete({ where: { id } });
    }
    async getById(id) {
        const data = await this.prisma.news.findUnique({ where: { id } });
        if (!data)
            return null;
        return news_1.News.create({
            id: data.id,
            image: data.image,
            title: data?.title,
            createdAt: data?.createdAt,
            description: data?.description,
        });
    }
    async getAll(page = 1, pageSize) {
        const skip = (page - 1) * pageSize;
        const take = pageSize;
        const totalRecords = await this.prisma.news.count();
        const totalPages = Math.ceil(totalRecords / pageSize);
        const news = await this.prisma.news.findMany({
            skip,
            take,
            orderBy: {
                createdAt: "desc",
            },
        });
        return {
            data: news.map((news) => news_1.News.create({
                id: news.id,
                title: news.title,
                image: news.image,
                description: news.description,
                createdAt: news.createdAt
            })),
            totalPages,
            totalRecords,
        };
    }
}
exports.PrismaNewsRespository = PrismaNewsRespository;
//# sourceMappingURL=prisma.news.repository.js.map