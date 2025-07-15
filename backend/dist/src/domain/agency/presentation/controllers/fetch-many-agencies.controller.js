"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManyAgenciesController = void 0;
class FetchManyAgenciesController {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(req) {
        try {
            const agencies = await this.useCase.execute();
            return {
                statusCode: 200,
                body: agencies,
            };
        }
        catch (error) {
            return {
                statusCode: 500,
                body: { message: error.message },
            };
        }
    }
}
exports.FetchManyAgenciesController = FetchManyAgenciesController;
//# sourceMappingURL=fetch-many-agencies.controller.js.map