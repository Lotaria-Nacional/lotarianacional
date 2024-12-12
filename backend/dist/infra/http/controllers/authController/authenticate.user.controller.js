"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserController = void 0;
const zod_1 = require("zod");
const notFound_error_1 = require("../../../../shared/errors/notFound.error");
const invalid_password_error_1 = require("../../../../shared/errors/invalid.password.error");
class AuthenticateUserController {
    constructor(authenticateUserUseCase) {
        this.authenticateUserUseCase = authenticateUserUseCase;
    }
    async handle(req, res) {
        const authenticationSchema = zod_1.z.object({
            email: zod_1.z.string().email().min(1, "O email é obrigatório."),
            password: zod_1.z.string().min(1, "A password é obrigatória."),
        });
        try {
            const user = authenticationSchema.parse(req.body);
            const { token } = await this.authenticateUserUseCase.execute(user.email, user.password);
            return res.status(200).json({ data: token });
        }
        catch (error) {
            if (error instanceof zod_1.z.ZodError) {
                return res.status(400).json({ message: error.errors[0].message });
            }
            if (error instanceof invalid_password_error_1.InvalidPassword) {
                return res.status(400).json({ message: error.message });
            }
            if (error instanceof notFound_error_1.NotFoundError) {
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: "Erro interno no servidor." });
        }
    }
}
exports.AuthenticateUserController = AuthenticateUserController;
