"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllBannersUseCase = void 0;
class GetAllBannersUseCase {
    constructor(bannerRepo) {
        this.bannerRepo = bannerRepo;
    }
    async execute() {
        try {
            const banners = await this.bannerRepo.getAll();
            return banners.map((banner) => banner.toJSON());
        }
        catch (error) {
            throw new Error("Erro ao obter os banners");
        }
    }
}
exports.GetAllBannersUseCase = GetAllBannersUseCase;
