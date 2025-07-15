"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPartnerJobOppeningByIdController = void 0;
const handle_controller_error_1 = require("../../../../../shared/utils/handle-controller-error");
const id_schema_1 = require("../../../../../shared/validations/id-schema");
class GetPartnerJobOppeningByIdController {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(request) {
        try {
            const { id } = id_schema_1.IdSchema.parse(request.params);
            const response = await this.useCase.execute(id);
            return {
                statusCode: 200,
                body: response
            };
        }
        catch (error) {
            return (0, handle_controller_error_1.handleControllerError)(error);
        }
    }
}
exports.GetPartnerJobOppeningByIdController = GetPartnerJobOppeningByIdController;
//# sourceMappingURL=get-partner-job-oppening-by-id.controller.js.map