"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserByIdController = void 0;
const not_found_error_1 = require("../../../../core/errors/common/not-found.error");
class GetUserByIdController {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(req) {
        const { id } = req.params;
        try {
            const user = await this.useCase.execute(id);
            return { statusCode: 200, body: user };
        }
        catch (error) {
            if (error instanceof not_found_error_1.NotFoundError) {
                return { statusCode: 404, body: { message: error.message } };
            }
            return { statusCode: 500, body: { message: "Erro no servidor." } };
        }
    }
}
exports.GetUserByIdController = GetUserByIdController;
//008418654LA049
//# sourceMappingURL=get-user-by-id.controller.js.map