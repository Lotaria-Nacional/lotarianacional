"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const zod_1 = require("zod");
class CreateUserController {
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    async handle(req, res) {
        const profileImage = req.file?.buffer;
        try {
            const createUserSchema = zod_1.z.object({
                firstName: zod_1.z.string().min(1, "O nome é obrigatório."),
                lastName: zod_1.z.string().min(1, "O sobrenome é obrigatório."),
                email: zod_1.z.string().email().min(1, "O email é obrigatório."),
                role: zod_1.z.string().min(1, "A função do usuário é obrigatória."),
                password: zod_1.z.string().min(6, "A palavra-passe deve conter pelo menos 6 caractéres."),
                profilePic: zod_1.z.string().optional(),
            });
            const user = createUserSchema.parse(req.body);
            await this.createUserUseCase.execute({
                ...user,
                profilePic: profileImage,
            });
            return res.status(201).json({ message: "Usuário criado com sucesso!" });
        }
        catch (error) {
            if (error instanceof zod_1.z.ZodError) {
                return res.status(400).json({ message: error.errors[0].message });
            }
            console.error(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
}
exports.CreateUserController = CreateUserController;
