import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";

dotenv.config();

import authRoutes from "./Infra/http/routes/auth.routes";
import userRoutes from "./Infra/http/routes/user.routes";
import newsRoutes from "./Infra/http/routes/news.routes";
import agencyRoutes from "./Infra/http/routes/agency.routes";
import resultRoutes from "./Infra/http/routes/result.routes";
import bannerResults from "./Infra/http/routes/banner.routes";
import dailyResults from "./Infra/http/routes/dailyResults.routes";
import statisticRoutes from "./Infra/http/routes/statistics.routes";
import recruitmentRoutes from "./Infra/http/routes/recruitment.routes";
import emissionRoutes from "./Infra/http/routes/emissions.route";

const app = express();

console.log(process.env.NODE_ENV, " -> ", process.env.DATABASE_URL);

app.set("views", path.join(__dirname, "Infra/http/views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "../public")));
app.use(cors({ origin: "*" }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", newsRoutes);
app.use("/api", resultRoutes);
app.use("/api", agencyRoutes);
app.use("/api", dailyResults);
app.use("/api", bannerResults);
app.use("/api", recruitmentRoutes);
app.use("/api", statisticRoutes);
app.use("/api", emissionRoutes);

const PORT = 8080;

app.listen(PORT, () => {
  console.log("Server Running... -> " + PORT);
});
