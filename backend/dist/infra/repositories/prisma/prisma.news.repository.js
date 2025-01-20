"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaNewsRespository = void 0;
const prisma_1 = require("../../Database/prisma");
const News_1 = require("../../../Domain/Entities/News/News");
class PrismaNewsRespository {
    async delete(id) {
        await prisma_1.prisma.news.delete({ where: { id } });
    }
    async getById(id) {
        const data = await prisma_1.prisma.news.findUnique({ where: { id } });
        if (!data)
            return null;
        return News_1.News.create({
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
    async getAll(page, pageSize) {
        const skip = (page - 1) * pageSize;
        const take = pageSize;
        const totalRecords = await prisma_1.prisma.news.count();
        const totalPages = Math.ceil(totalRecords / pageSize);
        const news = await prisma_1.prisma.news.findMany({
            skip,
            take,
            orderBy: {
                createdAt: "desc",
            },
        });
        if (news.length === 0)
            return [];
        return {
            data: news.map((news) => News_1.News.create({
                id: news.id,
                title: news.title,
                image: news.image,
                description: news.description,
            })),
            totalPages,
            totalRecords,
        };
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
        return News_1.News.create({
            id: result.id,
            title: result.title,
            image: result.image,
            createdAt: result.createdAt,
            description: result.description,
        });
    }
}
exports.PrismaNewsRespository = PrismaNewsRespository;
