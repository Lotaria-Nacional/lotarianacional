"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePartnerJobOppeningController = void 0;
const handle_controller_error_1 = require("../../../../../shared/utils/handle-controller-error");
const create_partner_job_oppening_schema_1 = require("../../validation/partner-job-oppening-schema/create-partner-job-oppening.schema");
class CreatePartnerJobOppeningController {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(request, response) {
        try {
            const body = create_partner_job_oppening_schema_1.createPartnerJobOppeningSchema.parse(request.body);
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
exports.CreatePartnerJobOppeningController = CreatePartnerJobOppeningController;
//# sourceMappingURL=create-partner-job-oppening.controller.js.map