"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAgencyController = void 0;
const handle_controller_error_1 = require("../../../../shared/utils/handle-controller-error");
const edit_agency_schema_1 = require("../validations/edit-agency.schema");
class UpdateAgencyController {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(req) {
        const { id } = req.params;
        try {
            const body = edit_agency_schema_1.editAgencySchema.parse({ ...req.body, id });
            const updatedAgency = await this.useCase.execute(body);
            return {
                statusCode: 200,
                body: { message: "Atualizado com sucesso.", data: updatedAgency },
            };
        }
        catch (error) {
            return (0, handle_controller_error_1.handleControllerError)(error);
        }
    }
}
exports.UpdateAgencyController = UpdateAgencyController;
//# sourceMappingURL=update-agency.controller.js.map