"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editUserSchema = void 0;
const zod_1 = require("zod");
exports.editUserSchema = zod_1.z.object({
    id: zod_1.z.string(),
    email: zod_1.z.string().email().optional(),
    password: zod_1.z.string().optional(),
    lastName: zod_1.z.string().optional(),
    role: zod_1.z.string().optional(),
    firstName: zod_1.z.string().optional(),
    profilePic: zod_1.z.any().optional()
});
//# sourceMappingURL=edit-user.schema.js.map