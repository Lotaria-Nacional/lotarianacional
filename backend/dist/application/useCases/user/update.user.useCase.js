"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserUseCase = void 0;
const get_cloudinaryPublicId_1 = require("../../../utils/get.cloudinaryPublicId");
class UpdateUserUseCase {
    constructor(userRepository, fileUploader) {
        this.userRepository = userRepository;
        this.fileUploader = fileUploader;
    }
    async execute(id, data) {
        const user = await this.userRepository.getById(id);
        if (!user) {
            throw new Error("Usuário solicitado não existe.");
        }
        let profileImage;
        if (data.profilePic) {
            if (user.profilePic && typeof user.profilePic === "string") {
                const publicId = (0, get_cloudinaryPublicId_1.getCloudinaryPublicId)(user.profilePic);
                if (publicId) {
                    await this.fileUploader.delete(publicId);
                }
            }
            profileImage = await this.fileUploader.upload(data.profilePic, "lotaria_nacional/users");
        }
        const updatedUser = await this.userRepository.update(id, {
            ...data,
            profilePic: profileImage,
        });
        return updatedUser;
    }
}
exports.UpdateUserUseCase = UpdateUserUseCase;
