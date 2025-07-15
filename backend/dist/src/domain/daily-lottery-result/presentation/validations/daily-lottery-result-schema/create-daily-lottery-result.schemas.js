"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDailyResultSchema = void 0;
const zod_1 = require("zod");
exports.createDailyResultSchema = zod_1.z.object({
    hour: zod_1.z.string().min(1, "A hora é obrigatória."),
    name: zod_1.z.string().min(1, "O nome é obrigatório."),
    videoURL: zod_1.z.string().optional().nullable(),
    number_1: zod_1.z.number().min(1, "O número deve ser maior que 0 e menor 90").max(90, "O número deve ser maior que 0 e menor 90"),
    number_2: zod_1.z.number().min(1, "O número deve ser maior que 0 e menor 90").max(90, "O número deve ser maior que 0 e menor 90"),
    number_3: zod_1.z.number().min(1, "O número deve ser maior que 0 e menor 90").max(90, "O número deve ser maior que 0 e menor 90"),
    number_4: zod_1.z.number().min(1, "O número deve ser maior que 0 e menor 90").max(90, "O número deve ser maior que 0 e menor 90"),
    number_5: zod_1.z.number().min(1, "O número deve ser maior que 0 e menor 90").max(90, "O número deve ser maior que 0 e menor 90"),
});
//# sourceMappingURL=create-daily-lottery-result.schemas.js.map