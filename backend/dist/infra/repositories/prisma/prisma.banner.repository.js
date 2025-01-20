"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaBannerRepository = void 0;
const prisma_1 = require("../../Database/prisma");
const banner_1 = require("../../../Domain/Entities/banner/banner");
const notFound_error_1 = require("../../../shared/errors/notFound.error");
class PrismaBannerRepository {
    async save(banner) {
        try {
            await prisma_1.prisma.banner.create({
                data: {
                    image: banner.props.image,
                    device: banner.props.device,
                },
            });
        }
        catch (error) {
            console.log("PrismaBannerRepository ~ save ~ error", error);
            throw new Error("Infra ~ Erro ao salvar o banner");
        }
    }
    async getAll() {
        try {
            const banners = await prisma_1.prisma.banner.findMany({ orderBy: { createdAt: "asc" } });
            return banners.map((banner) => banner_1.Banner.create({
                id: banner.id,
                image: banner.image,
                device: banner.device,
                createdAt: banner.createdAt,
            }));
        }
        catch (error) {
            throw new Error("Infra ~ Erro ao obter/listar os banners");
        }
    }
    async getById(id) {
        try {
            const banner = await prisma_1.prisma.banner.findUnique({ where: { id } });
            if (!banner) {
                throw new notFound_error_1.NotFoundError("Infra ~ Banner não encontrado.");
            }
            return banner_1.Banner.create({
                id: banner.id,
                image: banner.image,
                device: banner.device,
                createdAt: banner.createdAt,
            });
        }
        catch (error) {
            console.log("PrismaBannerRepository ~ getById ~ error", error);
            throw new Error("Infra ~ Banner não encontrado.");
        }
    }
    async update(id, newBanner) {
        try {
            await prisma_1.prisma.banner.update({
                where: { id },
                data: {
                    image: newBanner.props.image,
                    device: newBanner.props.device,
                },
            });
        }
        catch (error) { }
    }
    async delete(id) {
        try {
            await prisma_1.prisma.banner.delete({
                where: { id },
            });
        }
        catch (error) {
            console.log("PrismaBannerRepository ~ delete ~ error", error);
            throw new Error("Infra ~ Erro ao deletar o banner");
        }
    }
}
exports.PrismaBannerRepository = PrismaBannerRepository;
