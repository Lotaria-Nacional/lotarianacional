"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveTemplatePath = void 0;
const path_1 = __importDefault(require("path"));
const resolveTemplatePath = (template) => path_1.default.join(__dirname, "../Infra/http/views", template);
exports.resolveTemplatePath = resolveTemplatePath;
//# sourceMappingURL=email.js.map