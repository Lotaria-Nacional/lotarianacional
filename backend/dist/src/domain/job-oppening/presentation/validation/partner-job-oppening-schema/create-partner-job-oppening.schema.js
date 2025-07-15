"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPartnerJobOppeningSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.createPartnerJobOppeningSchema = zod_1.default.object({
    title: zod_1.default.string({ required_error: "A função é obrigatória" }),
    location: zod_1.default.string({ required_error: "A localização é obrigatória" }),
    type: zod_1.default.string({ required_error: "O tipo é obrigatório" }),
    requirements: zod_1.default.array(zod_1.default.string(), { required_error: "Os requisitos são obrigatórios" }),
    description: zod_1.default.string().optional(),
    quantity: zod_1.default.coerce.number(),
    responsabilities: zod_1.default.array(zod_1.default.string()).optional(),
});
//# sourceMappingURL=create-partner-job-oppening.schema.js.map