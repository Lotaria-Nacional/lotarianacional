"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserController = void 0;
const edit_user_schema_1 = require("../validations/edit-user.schema");
const handle_controller_error_1 = require("../../../../shared/utils/handle-controller-error");
class UpdateUserController {
    uesCase;
    constructor(uesCase) {
        this.uesCase = uesCase;
    }
    async handle(req) {
        const { id } = req.params;
        try {
            const file = req.file;
            const fileBuffer = file.buffer;
            const body = edit_user_schema_1.editUserSchema.parse({ ...req.body, id, profilePic: fileBuffer });
            await this.uesCase.execute({ ...body, profilePic: fileBuffer });
            return {
                statusCode: 200,
                body: { message: "Usuário atualizado" },
            };
        }
        catch (error) {
            return (0, handle_controller_error_1.handleControllerError)(error);
        }
    }
}
exports.UpdateUserController = UpdateUserController;
//# sourceMappingURL=update-user.controller.js.map