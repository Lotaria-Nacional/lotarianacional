"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const process_1 = require("process");
const authenticateMiddleware = (req, res, next) => {
    const accessToken = req.cookies.accessToken;
    if (!accessToken) {
        throw new Error("Não autorizado.");
    }
    jsonwebtoken_1.default.verify(accessToken, process_1.env.JWT_SECRET);
    next();
};
exports.authenticateMiddleware = authenticateMiddleware;
//# sourceMappingURL=authenticate.middleware.js.map