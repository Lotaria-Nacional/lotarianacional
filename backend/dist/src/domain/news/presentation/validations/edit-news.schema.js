"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editNewsSchema = void 0;
const zod_1 = require("zod");
exports.editNewsSchema = zod_1.z.object({
    id: zod_1.z.string(),
    title: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    image: zod_1.z.any().optional()
});
//# sourceMappingURL=edit-news.schema.js.map