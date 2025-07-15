"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAgencyController = void 0;
const handle_controller_error_1 = require("../../../../shared/utils/handle-controller-error");
const create_agency_schema_1 = require("../validations/create-agency.schema");
class CreateAgencyController {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(req) {
        try {
            const body = create_agency_schema_1.createAgencySchema.parse(req.body);
            await this.useCase.execute(body);
            return {
                statusCode: 201,
                body: { message: "Criado com sucesso." },
            };
        }
        catch (error) {
            return (0, handle_controller_error_1.handleControllerError)(error);
        }
    }
}
exports.CreateAgencyController = CreateAgencyController;
//# sourceMappingURL=create-agency.controller.js.map