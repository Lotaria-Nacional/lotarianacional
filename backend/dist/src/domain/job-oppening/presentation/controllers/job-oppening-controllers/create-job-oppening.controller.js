"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateJobOppeningController = void 0;
const handle_controller_error_1 = require("../../../../../shared/utils/handle-controller-error");
const create_job_oppening_schema_1 = require("../../validation/create-job-oppening.schema");
class CreateJobOppeningController {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(request, response) {
        try {
            const body = create_job_oppening_schema_1.createJobOppeningSchema.parse(request.body);
            await this.useCase.execute(body);
            return {
                statusCode: 201,
                body: { message: "Vaga adicionada com sucesso" },
            };
        }
        catch (error) {
            return (0, handle_controller_error_1.handleControllerError)(error);
        }
    }
}
exports.CreateJobOppeningController = CreateJobOppeningController;
//# sourceMappingURL=create-job-oppening.controller.js.map