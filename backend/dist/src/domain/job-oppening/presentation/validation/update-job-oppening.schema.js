"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateJobOppeningSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.updateJobOppeningSchema = zod_1.default.object({
    id: zod_1.default.string({ required_error: "O id não é válido" }).nonempty(),
    title: zod_1.default.string().optional(),
    department: zod_1.default.string().optional(),
    description: zod_1.default.string().optional().optional(),
    quantity: zod_1.default.coerce.number().optional(),
    requirements: zod_1.default.array(zod_1.default.string()).optional(),
    responsabilities: zod_1.default.array(zod_1.default.string()).optional(),
});
//# sourceMappingURL=update-job-oppening.schema.js.map