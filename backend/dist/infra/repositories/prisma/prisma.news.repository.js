"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaNewsRespository = void 0;
const prisma_1 = require("../../database/prisma");
const news_1 = require("../../../domain/entities/news/news");
class PrismaNewsRespository {
    async delete(id) {
        await prisma_1.prisma.news.delete({ where: { id } });
    }
    async getById(id) {
        const data = await prisma_1.prisma.news.findUnique({ where: { id } });
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
    async save(news) {
        await prisma_1.prisma.news.create({
            data: {
                title: news.title,
                createdAt: news.createdAt,
                image: news.image,
                description: news.description,
            },
        });
    }
    async getAll() {
        const newsList = await prisma_1.prisma.news.findMany();
        return newsList.map((news) => news_1.News.create({
            id: news.id,
            title: news.title,
            image: news.image,
            description: news.description,
        }));
    }
    async update(id, data) {
        const result = await prisma_1.prisma.news.update({
            where: { id },
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
}
exports.PrismaNewsRespository = PrismaNewsRespository;
