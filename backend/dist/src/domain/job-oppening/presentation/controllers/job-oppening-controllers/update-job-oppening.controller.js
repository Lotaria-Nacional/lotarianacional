"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateJobOppeningController = void 0;
const handle_controller_error_1 = require("../../../../../shared/utils/handle-controller-error");
const id_schema_1 = require("../../../../../shared/validations/id-schema");
const update_job_oppening_schema_1 = require("../../validation/update-job-oppening.schema");
class UpdateJobOppeningController {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(request) {
        try {
            const { id } = id_schema_1.IdSchema.parse(request.params);
            const body = update_job_oppening_schema_1.updateJobOppeningSchema.parse({ ...request.body, id });
            await this.useCase.execute(body);
            return {
                statusCode: 200,
                body: { message: "A vaga foi atualizada" },
            };
        }
        catch (error) {
            return (0, handle_controller_error_1.handleControllerError)(error);
        }
    }
}
exports.UpdateJobOppeningController = UpdateJobOppeningController;
//# sourceMappingURL=update-job-oppening.controller.js.map