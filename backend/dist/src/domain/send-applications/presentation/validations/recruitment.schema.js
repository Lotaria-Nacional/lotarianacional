"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recruitmentSchema = void 0;
const zod_1 = require("zod");
exports.recruitmentSchema = zod_1.z.object({
    cv: zod_1.z.any(),
    email: zod_1.z.string(),
    phone: zod_1.z.string(),
    lastName: zod_1.z.string().min(1, "O último nome é obrigatório."),
    firstName: zod_1.z.string().min(1, "O primeiro nome é obrigatório."),
});
//# sourceMappingURL=recruitment.schema.js.map