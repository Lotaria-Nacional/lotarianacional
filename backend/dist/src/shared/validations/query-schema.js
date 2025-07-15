"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuerySchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.QuerySchema = zod_1.default.object({
    page: zod_1.default.coerce.number().optional(),
    limit: zod_1.default.coerce.number().optional(),
    slug: zod_1.default.coerce.string().optional(),
});
//# sourceMappingURL=query-schema.js.map