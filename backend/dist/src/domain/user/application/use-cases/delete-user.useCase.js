"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserUseCase = void 0;
const not_found_error_1 = require("../../../../core/errors/common/not-found.error");
class DeleteUserUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(id) {
        const user = await this.userRepository.getById(id);
        if (!user)
            throw new not_found_error_1.NotFoundError("Usuário não encontrado.");
        // if (user.profilePic && typeof user.profilePic === "string") {
        //   const publicId = getCloudinaryPublicId(user.profilePic)
        //   if (publicId) {
        //     await this.fileUploader.delete(publicId, "image");
        //   }
        // }
        await this.userRepository.delete(id);
    }
}
exports.DeleteUserUseCase = DeleteUserUseCase;
//# sourceMappingURL=delete-user.useCase.js.map