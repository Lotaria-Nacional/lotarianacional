"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const zod_1 = require("zod");
const invalid_password_error_1 = require("../../../../../core/errors/common/invalid-password.error");
const not_found_error_1 = require("../../../../../core/errors/common/not-found.error");
class LoginController {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(req) {
        const authenticationSchema = zod_1.z.object({
            email: zod_1.z.string().email().min(1, "O email é obrigatório."),
            password: zod_1.z.string().min(6, "A password é obrigatória."),
        });
        try {
            const authentication = authenticationSchema.parse(req.body);
            const { token, user } = await this.useCase.execute(authentication.email, authentication.password);
            const userWithoutPassword = {
                id: user.id,
                email: user.email,
                name: `${user.firstName} ${user.lastName}`,
                role: user.role,
                profilePic: user.profilePic,
            };
            return {
                statusCode: 200,
                body: {
                    message: "Login feito com sucesso.",
                    user: userWithoutPassword,
                    token: token,
                },
            };
        }
        catch (error) {
            if (error instanceof not_found_error_1.NotFoundError) {
                return { statusCode: 404, body: { message: error.message } };
            }
            if (error instanceof zod_1.z.ZodError) {
                return { statusCode: 400, body: { message: error.errors[0].message } };
            }
            if (error instanceof invalid_password_error_1.InvalidPassword) {
                return { statusCode: 400, body: { message: error.message } };
            }
            return { statusCode: 500, body: { message: "Erro interno no servidor." } };
        }
    }
}
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map