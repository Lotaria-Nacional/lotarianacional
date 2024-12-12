"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserUseCase = void 0;
const notFound_error_1 = require("../../../shared/errors/notFound.error");
const get_cloudinaryPublicId_1 = require("../../../utils/get.cloudinaryPublicId");
class DeleteUserUseCase {
    constructor(userRepository, fileUploader) {
        this.userRepository = userRepository;
        this.fileUploader = fileUploader;
    }
    async execute(id) {
        const user = await this.userRepository.getById(id);
        if (!user)
            throw new notFound_error_1.NotFoundError("Usuário não encontrado.");
        if (user.profilePic && typeof user.profilePic === "string") {
            const publicId = (0, get_cloudinaryPublicId_1.getCloudinaryPublicId)(user.profilePic);
            if (publicId) {
                await this.fileUploader.delete(publicId);
            }
        }
        await this.userRepository.delete(id);
    }
}
exports.DeleteUserUseCase = DeleteUserUseCase;
