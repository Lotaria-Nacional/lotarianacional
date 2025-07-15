"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewsSchema = void 0;
const zod_1 = require("zod");
exports.createNewsSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, 'O título é obrigatório'),
    description: zod_1.z.string().min(1, 'A descrição é obrigatória'),
    image: zod_1.z.any({ errorMap: () => ({ message: 'A imagem é obrigatória' }) })
});
//# sourceMappingURL=create-news.schema.js.map