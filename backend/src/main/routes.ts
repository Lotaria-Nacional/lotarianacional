import { Router } from "express";

import newsRouter from "../domain/news/presentation/routes/news.routes"
import authRouter from "../domain/user/presentation/routes/auth.routes"
import userRouter from "../domain/user/presentation/routes/user.routes"
import agencyRouter from "../domain/agency/presentation/routes/agency.routes"
import emissionRouter from "../domain/daily-lottery-result/presentation/routes/emissions.route"
import statisticsRouter from "../domain/daily-lottery-result/presentation/routes/statistics.routes"
import resultsRouter from "../domain/daily-lottery-result/presentation/routes/lottery-result.routes"
import dailyLotteryResultRouter from "../domain/daily-lottery-result/presentation/routes/daily-lottery-results.routes"

export const router = Router()

router.use("/news",newsRouter)
router.use("/auth",authRouter)
router.use("/user",userRouter)
router.use("/agency",agencyRouter)
router.use("/emission",emissionRouter)
router.use("/statistics",statisticsRouter)
router.use("/result",resultsRouter)
router.use("/dailyResults",dailyLotteryResultRouter)

export default router