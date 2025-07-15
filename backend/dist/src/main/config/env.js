"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const zod_1 = __importDefault(require("zod"));
const logger_1 = require("./logger");
const envSchema = zod_1.default.object({
    DATABASE_URL: zod_1.default.string().min(1, "DATABASE_URL is missing"),
    JWT_SECRET: zod_1.default.string().min(1, "JWT_SECRET is missing"),
    SENDGRID_API_KEY: zod_1.default.string().min(1, "SENDGRID_API_KEY is missing"),
    NODE_ENV: zod_1.default.string().default("development"),
    PORT: zod_1.default.coerce.number().default(3333),
});
const parsed = envSchema.safeParse(process.env);
if (!parsed.success) {
    logger_1.logger.error("Missing env variable: " + parsed.error.errors[0].path);
    process.exit(1);
}
const { DATABASE_URL, JWT_SECRET, NODE_ENV, PORT, SENDGRID_API_KEY } = parsed.data;
exports.env = {
    DATABASE_URL,
    JWT_SECRET,
    SENDGRID_API_KEY,
    NODE_ENV,
    PORT,
};
//# sourceMappingURL=env.js.map