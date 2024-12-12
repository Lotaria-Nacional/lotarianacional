"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBannersUseCase = void 0;
class GetBannersUseCase {
    constructor(bannerRepository) {
        this.bannerRepository = bannerRepository;
    }
    async execute() {
        const banners = await this.bannerRepository.getAll();
        return banners;
    }
}
exports.GetBannersUseCase = GetBannersUseCase;
