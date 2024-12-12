"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config();
const auth_routes_1 = __importDefault(require("./infra/http/routes/auth.routes"));
const user_routes_1 = __importDefault(require("./infra/http/routes/user.routes"));
const news_routes_1 = __importDefault(require("./infra/http/routes/news.routes"));
const agency_routes_1 = __importDefault(require("./infra/http/routes/agency.routes"));
const result_routes_1 = __importDefault(require("./infra/http/routes/result.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", user_routes_1.default);
app.use("/api", news_routes_1.default);
app.use("/api", result_routes_1.default);
app.use("/api", agency_routes_1.default);
app.use("/api", auth_routes_1.default);
const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server Running... -> " + PORT);
});
