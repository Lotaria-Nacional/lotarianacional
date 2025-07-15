"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDailyResultsController = void 0;
const zod_1 = require("zod");
const create_daily_lottery_result_schemas_1 = require("../../validations/daily-lottery-result-schema/create-daily-lottery-result.schemas");
class CreateDailyResultsController {
    createDailyResultUseCase;
    constructor(createDailyResultUseCase) {
        this.createDailyResultUseCase = createDailyResultUseCase;
    }
    async handle(req) {
        try {
            const body = create_daily_lottery_result_schemas_1.createDailyResultSchema.parse(req.body);
            await this.createDailyResultUseCase.execute(body);
            return {
                statusCode: 201,
                body: { message: "Criado com sucesso." },
            };
        }
        catch (error) {
            if (error instanceof zod_1.z.ZodError) {
                return {
                    statusCode: 400,
                    body: { message: error.errors[0].message },
                };
            }
            return {
                statusCode: 400,
                body: { message: error.message },
            };
        }
    }
}
exports.CreateDailyResultsController = CreateDailyResultsController;
//# sourceMappingURL=create-daily-lottery-result.controller.js.map