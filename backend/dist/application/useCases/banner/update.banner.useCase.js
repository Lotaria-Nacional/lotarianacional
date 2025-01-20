"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBannerUseCase = void 0;
const notFound_error_1 = require("../../../shared/errors/notFound.error");
const get_cloudinaryPublicId_1 = require("../../../utils/get.cloudinaryPublicId");
class UpdateBannerUseCase {
    constructor(bannerRepo, fileService) {
        this.bannerRepo = bannerRepo;
        this.fileService = fileService;
    }
    async execute(data) {
        const { id, image } = data;
        try {
            const existingBanner = await this.bannerRepo.getById(id);
            if (!existingBanner) {
                throw new notFound_error_1.NotFoundError("Banner não encontrado.");
            }
            const newImage = await this.handleImage(existingBanner.props.image, image);
            existingBanner.update({ image: newImage });
            await this.bannerRepo.update(id, existingBanner);
        }
        catch (error) {
            console.log("UpdateBannerUseCase ~ execute ~ error", error);
            throw new Error("Erro ao atualizar o banner");
        }
    }
    async handleImage(existingBanner, newImage) {
        const publicID = (0, get_cloudinaryPublicId_1.getCloudinaryPublicId)(existingBanner);
        if (publicID) {
            try {
                await this.fileService.delete(publicID);
                const newImg = await this.fileService.upload(newImage, "lotaria_nacional/banners");
                return newImg;
            }
            catch (error) {
                console.log("UpdateBannerUseCase ~ execute ~ error", error);
                throw new Error("Erro eliminar imagem no cloudinary");
            }
        }
    }
}
exports.UpdateBannerUseCase = UpdateBannerUseCase;
