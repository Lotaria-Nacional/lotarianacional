"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaBannerRepository = void 0;
const prisma_1 = require("../../database/prisma");
const banner_1 = require("../../../domain/entities/banner/banner");
const notFound_error_1 = require("../../../shared/errors/notFound.error");
class PrismaBannerRepository {
    async save(banner) {
        await prisma_1.prisma.banners.create({
            data: banner,
        });
    }
    async getAll() {
        const banners = await prisma_1.prisma.banners.findMany();
        return banners.map((banner) => banner_1.Banner.create({ ...banner, id: banner.id }));
    }
    async getById(id) {
        const existingBanner = await prisma_1.prisma.banners.findUnique({ where: { id } });
        if (!existingBanner)
            return null;
        return banner_1.Banner.create({ ...existingBanner, id: existingBanner.id });
    }
    async update(id, data) {
        const existingBanner = await prisma_1.prisma.banners.findUnique({ where: { id } });
        if (!existingBanner)
            throw new notFound_error_1.NotFoundError("Não encontrado.");
        await prisma_1.prisma.banners.update({ where: { id }, data });
    }
    async delete(id) {
        const existingBanner = await prisma_1.prisma.banners.findUnique({ where: { id } });
        if (!existingBanner)
            throw new notFound_error_1.NotFoundError("Não encontrado.");
        await prisma_1.prisma.banners.delete({ where: { id } });
    }
}
exports.PrismaBannerRepository = PrismaBannerRepository;
