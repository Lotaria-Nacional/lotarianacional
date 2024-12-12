"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBannerUseCase = void 0;
const banner_1 = require("../../../domain/entities/banner/banner");
class CreateBannerUseCase {
    constructor(bannerRepository, fileUploadService) {
        this.bannerRepository = bannerRepository;
        this.fileUploadService = fileUploadService;
    }
    async execute(data) {
        const dBanner1 = await this.fileUploadService.upload(data.desktop_banner_1, "lotaria_nacional/banners");
        const dBanner2 = await this.fileUploadService.upload(data.desktop_banner_2, "lotaria_nacional/banners");
        const dBanner3 = await this.fileUploadService.upload(data.desktop_banner_3, "lotaria_nacional/banners");
        const mBanner1 = await this.fileUploadService.upload(data.mobile_banner_1, "lotaria_nacional/banners");
        const mBanner2 = await this.fileUploadService.upload(data.mobile_banner_2, "lotaria_nacional/banners");
        const mBanner3 = await this.fileUploadService.upload(data.mobile_banner_3, "lotaria_nacional/banners");
        const banner = banner_1.Banner.create({
            desktop_banner_1: dBanner1,
            desktop_banner_2: dBanner2,
            desktop_banner_3: dBanner3,
            mobile_banner_1: mBanner1,
            mobile_banner_2: mBanner2,
            mobile_banner_3: mBanner3,
        });
        await this.bannerRepository.save(banner);
    }
}
exports.CreateBannerUseCase = CreateBannerUseCase;
