"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBannerUseCase = void 0;
const banner_1 = require("../../../Domain/Entities/banner/banner");
class CreateBannerUseCase {
    constructor(bannerRepo, fileService) {
        this.bannerRepo = bannerRepo;
        this.fileService = fileService;
    }
    async execute(data) {
        const { device, image } = data;
        try {
            const banners = await this.bannerRepo.getAll();
            if (banners.length >= 6) {
                throw new Error("Atingiu o limite de banners.");
            }
            const imageURL = await this.fileService.upload(image, "lotaria_nacional/banners");
            const banner = banner_1.Banner.create({
                device,
                image: imageURL,
            });
            await this.bannerRepo.save(banner);
        }
        catch (error) {
            console.log("CreateBannerUseCase ~ execute ~ error", error);
            throw new Error("Erro ao salvar o banner.");
        }
    }
}
exports.CreateBannerUseCase = CreateBannerUseCase;
