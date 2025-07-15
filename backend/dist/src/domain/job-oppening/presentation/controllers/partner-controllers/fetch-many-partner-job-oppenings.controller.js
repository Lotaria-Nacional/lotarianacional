"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManyPartnerJobOppeningsController = void 0;
const handle_controller_error_1 = require("../../../../../shared/utils/handle-controller-error");
const query_schema_1 = require("../../../../../shared/validations/query-schema");
class FetchManyPartnerJobOppeningsController {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(request) {
        try {
            const { page, limit, slug } = query_schema_1.QuerySchema.parse(request.query);
            const response = await this.useCase.execute({ page, limit, slug });
            return {
                statusCode: 200,
                body: response,
            };
        }
        catch (error) {
            return (0, handle_controller_error_1.handleControllerError)(error);
        }
    }
}
exports.FetchManyPartnerJobOppeningsController = FetchManyPartnerJobOppeningsController;
//# sourceMappingURL=fetch-many-partner-job-oppenings.controller.js.map