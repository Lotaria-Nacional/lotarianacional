"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSchema = void 0;
const zod_1 = require("zod");
exports.createUserSchema = zod_1.z.object({
    email: zod_1.z.string().min(1, "O email é obrigatório").email(),
    firstName: zod_1.z.string().min(1, "O nome é obrigatório"),
    lastName: zod_1.z.string().min(1, "O sobrenome é obrigatório"),
    password: zod_1.z.string().min(1, "A password é obrigatória"),
    role: zod_1.z.string(),
    profilePic: zod_1.z.any().optional()
});
//# sourceMappingURL=create-user.schema.js.map