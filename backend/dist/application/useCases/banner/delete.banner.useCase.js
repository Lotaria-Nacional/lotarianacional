"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBannerUseCase = void 0;
const notFound_error_1 = require("../../../shared/errors/notFound.error");
const get_cloudinaryPublicId_1 = require("../../../utils/get.cloudinaryPublicId");
class DeleteBannerUseCase {
    constructor(bannerRepository, fileUpload) {
        this.bannerRepository = bannerRepository;
        this.fileUpload = fileUpload;
    }
    async execute(id) {
        try {
            const existingBanner = await this.bannerRepository.getById(id);
            if (!existingBanner)
                throw new notFound_error_1.NotFoundError("Banner não encontrado.");
            const publicID = (0, get_cloudinaryPublicId_1.getCloudinaryPublicId)(existingBanner.props.image);
            if (publicID) {
                await this.fileUpload.delete(publicID);
            }
            await this.bannerRepository.delete(id);
        }
        catch (error) {
            console.log("DeleteBannerUseCase ~ execute ~ error", error);
            throw new Error("Erro ao deletar o banner");
        }
    }
}
exports.DeleteBannerUseCase = DeleteBannerUseCase;
