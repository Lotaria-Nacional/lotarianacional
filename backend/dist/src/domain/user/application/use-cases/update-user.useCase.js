"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserUseCase = void 0;
const not_found_error_1 = require("../../../../core/errors/common/not-found.error");
class UpdateUserUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(data) {
        const user = await this.userRepository.getById(data.id);
        if (!user) {
            throw new not_found_error_1.NotFoundError("Usuário solicitado não existe.");
        }
        // let profileImage = user.profilePic;
        // if (data.profilePic) {
        //   if (user.profilePic && typeof user.profilePic === "string") {
        //     const publicId = getCloudinaryPublicId(user.profilePic);
        //     if (publicId) {
        //       await this.fileUploader.delete(publicId, "image");
        //     }
        //   }
        //   profileImage = await this.fileUploader.upload(data.profilePic, "lotaria_nacional/users", "image");
        // }
        user.update({ ...data });
        const updatedUser = await this.userRepository.save(user);
        return updatedUser;
    }
}
exports.UpdateUserUseCase = UpdateUserUseCase;
//# sourceMappingURL=update-user.useCase.js.map