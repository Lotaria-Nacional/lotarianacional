"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserController = void 0;
const zod_1 = require("zod");
const notFound_error_1 = require("../../../../shared/errors/notFound.error");
class UpdateUserController {
    constructor(updateUserUseCase) {
        this.updateUserUseCase = updateUserUseCase;
    }
    async handle(req, res) {
        const idSchema = zod_1.z.object({
            id: zod_1.z.string(),
        });
        const updateUserSchema = zod_1.z.object({
            firstName: zod_1.z.string().optional(),
            lastName: zod_1.z.string().optional(),
            email: zod_1.z.string().email().optional(),
            password: zod_1.z.string().optional(),
            profilePic: zod_1.z.string().optional(),
            role: zod_1.z.string().optional(),
        });
        try {
            const profileImage = req.file?.buffer;
            const requestId = idSchema.parse(req.params);
            const updateUserData = updateUserSchema.parse(req.body);
            const updatedUser = await this.updateUserUseCase.execute(requestId.id, {
                ...updateUserData,
                profilePic: profileImage,
            });
            return res
                .status(200)
                .json({ message: "Usuário atualizado", data: updatedUser });
        }
        catch (error) {
            if (error instanceof notFound_error_1.NotFoundError) {
                return res.status(404).json({ message: error.message });
            }
            if (error instanceof zod_1.z.ZodError) {
                return res.status(400).json({ message: error.errors[0].message });
            }
            return res
                .status(500)
                .json({ message: "Erro interno no servidor.", error: error });
        }
    }
}
exports.UpdateUserController = UpdateUserController;
