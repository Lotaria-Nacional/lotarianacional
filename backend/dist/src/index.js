"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const index_1 = __importDefault(require("./main/routes/index"));
const env_1 = require("./main/config/env");
const logger_1 = require("./main/config/logger");
dotenv_1.default.config();
const app = (0, express_1.default)();
logger_1.logger.info(env_1.env.NODE_ENV);
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "Infra", "http", "views"));
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "public")));
app.use((0, cors_1.default)({ origin: "*" }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api", index_1.default);
app.listen(env_1.env.PORT, () => {
    logger_1.logger.info("Server running on port: " + env_1.env.PORT);
});
//# sourceMappingURL=index.js.map