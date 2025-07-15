"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const handle_controller_error_1 = require("../../../../shared/utils/handle-controller-error");
const create_user_schema_1 = require("../validations/create-user.schema");
class CreateUserController {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(req) {
        try {
            const body = create_user_schema_1.createUserSchema.parse({ ...req.body });
            await this.useCase.execute({
                ...body,
            });
            return { statusCode: 201, body: { message: "Usuário criado com sucesso!" } };
        }
        catch (error) {
            return (0, handle_controller_error_1.handleControllerError)(error);
        }
    }
}
exports.CreateUserController = CreateUserController;
//# sourceMappingURL=create-user.controller.js.map