"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJobOppeningSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.createJobOppeningSchema = zod_1.default.object({
    title: zod_1.default.string({ required_error: "A função é obrigatória" }),
    department: zod_1.default.string({ required_error: "O departamento é obrigatório" }),
    requirements: zod_1.default.array(zod_1.default.string(), { required_error: "Os requisitos são obrigatórios" }),
    description: zod_1.default.string().optional(),
    quantity: zod_1.default.coerce.number(),
    responsabilities: zod_1.default.array(zod_1.default.string()).optional(),
});
//# sourceMappingURL=create-job-oppening.schema.js.map