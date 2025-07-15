"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteJobOppeningController = void 0;
const handle_controller_error_1 = require("../../../../../shared/utils/handle-controller-error");
const id_schema_1 = require("../../../../../shared/validations/id-schema");
class DeleteJobOppeningController {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(request) {
        try {
            const { id } = id_schema_1.IdSchema.parse(request.params);
            await this.useCase.execute(id);
            return {
                statusCode: 200,
                body: { message: "Vaga removida com sucesso" }
            };
        }
        catch (error) {
            return (0, handle_controller_error_1.handleControllerError)(error);
        }
    }
}
exports.DeleteJobOppeningController = DeleteJobOppeningController;
//# sourceMappingURL=delete-job-oppening.controller.js.map