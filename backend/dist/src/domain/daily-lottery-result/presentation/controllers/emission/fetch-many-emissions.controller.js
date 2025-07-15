"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManyEmissionsController = void 0;
class FetchManyEmissionsController {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(_req) {
        try {
            const emissions = await this.useCase.execute();
            return { statusCode: 200, body: emissions };
        }
        catch (error) {
            return { statusCode: 500, body: { error, message: "error: " + error } };
        }
    }
}
exports.FetchManyEmissionsController = FetchManyEmissionsController;
//# sourceMappingURL=fetch-many-emissions.controller.js.map