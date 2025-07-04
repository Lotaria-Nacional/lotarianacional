import agencyRouter from "../../domain/agency/presentation/routes/agency.routes";
import dailyLotteryResultRouter from "../../domain/daily-lottery-result/presentation/routes/daily-lottery-results.routes";
import emissionRouter from "../../domain/daily-lottery-result/presentation/routes/emissions.route";
import lotteryResultRouter from "../../domain/daily-lottery-result/presentation/routes/lottery-result.routes";
import statisticsRouter from "../../domain/daily-lottery-result/presentation/routes/statistics.routes";
import newsRouter from "../../domain/news/presentation/routes/news.routes";
import applicationRoutes from "../../domain/send-applications/presentation/routes/application.routes";
import authRouter from "../../domain/user/presentation/routes/auth.routes";
import userRouter from "../../domain/user/presentation/routes/user.routes";
import { Router } from "express";

export const routes = Router();

routes.use("/news", newsRouter);
routes.use("/auth", authRouter);
routes.use("/users", userRouter);
routes.use("/agencies", agencyRouter);
routes.use("/emissions", emissionRouter);
routes.use("/statistics", statisticsRouter);
routes.use("/lottery-results", lotteryResultRouter);
routes.use("/daily-lottery-results", dailyLotteryResultRouter);
routes.use("/candidaturas", applicationRoutes);

export default routes;
