"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetJobOppeningByIdController = void 0;
const handle_controller_error_1 = require("../../../../../shared/utils/handle-controller-error");
const id_schema_1 = require("../../../../../shared/validations/id-schema");
class GetJobOppeningByIdController {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(request) {
        try {
            console.log("called");
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
exports.GetJobOppeningByIdController = GetJobOppeningByIdController;
//# sourceMappingURL=get-job-oppening-by-id.controller.js.map