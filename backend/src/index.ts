import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import newsRoutes from "./domain/news/presentation/routes/news.routes";
import authRoutes from "./domain/user/presentation/routes/auth.routes";
import userRoutes from "./domain/user/presentation/routes/user.routes";
import agencyRoutes from "./domain/agency/presentation/routes/agency.routes";
import emissionRouter from "./domain/daily-lottery-result/presentation/routes/emissions.route";
import resultRoutes from "./domain/daily-lottery-result/presentation/routes/lottery-result.routes";
import applicationRoutes from "./domain/send-applications/presentation/routes/application.routes";
import statisticsRouter from "./domain/daily-lottery-result/presentation/routes/statistics.routes";
import dailyResults from "./domain/daily-lottery-result/presentation/routes/daily-lottery-results.routes";

dotenv.config();

const app = express();

console.log(process.env.NODE_ENV);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Infra","http", "views"));

app.use(express.static(path.join(__dirname, '..', 'public')));

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
app.use("/api", emissionRouter);
app.use("/api", statisticsRouter);
app.use("/api", applicationRoutes);

const PORT = 3333;

app.listen(PORT, () => {
  console.log("Server Running... -> " + PORT);
});
