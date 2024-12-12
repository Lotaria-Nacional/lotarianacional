"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserController = void 0;
class UpdateUserController {
    constructor(updateUserUseCase) {
        this.updateUserUseCase = updateUserUseCase;
    }
    async handle(req, res) {
        const { id } = req.params;
        const profileImage = req.file?.buffer;
        const { firstName, lastName, email, password } = req.body;
        const data = {
            firstName,
            lastName,
            email,
            password,
            profilePic: profileImage,
        };
        const updatedUser = await this.updateUserUseCase.execute(id, data);
        return res
            .status(200)
            .json({ message: "Usuário atualizado", data: updatedUser });
    }
}
exports.UpdateUserController = UpdateUserController;
