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
dotenv_1.default.config();
const auth_routes_1 = __importDefault(require("./Infra/http/routes/auth.routes"));
const user_routes_1 = __importDefault(require("./Infra/http/routes/user.routes"));
const news_routes_1 = __importDefault(require("./Infra/http/routes/news.routes"));
const agency_routes_1 = __importDefault(require("./Infra/http/routes/agency.routes"));
const result_routes_1 = __importDefault(require("./Infra/http/routes/result.routes"));
const banner_routes_1 = __importDefault(require("./Infra/http/routes/banner.routes"));
const dailyResults_routes_1 = __importDefault(require("./Infra/http/routes/dailyResults.routes"));
const statistics_routes_1 = __importDefault(require("./Infra/http/routes/statistics.routes"));
const recruitment_routes_1 = __importDefault(require("./Infra/http/routes/recruitment.routes"));
const app = (0, express_1.default)();
console.log(process.env.NODE_ENV, " -> ", process.env.DATABASE_URL);
app.set("views", path_1.default.join(__dirname, "Infra/http/views"));
app.set("view engine", "ejs");
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.use((0, cors_1.default)({ origin: "*" }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api", auth_routes_1.default);
app.use("/api", user_routes_1.default);
app.use("/api", news_routes_1.default);
app.use("/api", result_routes_1.default);
app.use("/api", agency_routes_1.default);
app.use("/api", dailyResults_routes_1.default);
app.use("/api", banner_routes_1.default);
app.use("/api", recruitment_routes_1.default);
app.use("/api", statistics_routes_1.default);
const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server Running... -> " + PORT);
});
