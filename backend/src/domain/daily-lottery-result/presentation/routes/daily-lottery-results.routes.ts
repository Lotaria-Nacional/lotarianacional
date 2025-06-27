import { Router } from "express";

import { makeDailyLotteryResults } from "../factories/make-daily-lottery-results.controller";
import { expressAdapterController } from "@/core/adapters/express-adapter-controller";
import { dailyResultRepo, emissionRepo, statisticService } from "@/main/container/repositories";

const dailyLotteryResultRouter = Router();

const {
  createDailyLotteryResult,
  deleteDailyLotteryResults,
  fetchManyDailyLotteryResults,
  getLastDailyLotteryResults
} = makeDailyLotteryResults(dailyResultRepo, emissionRepo,statisticService)

dailyLotteryResultRouter.post("/daily-result", expressAdapterController(createDailyLotteryResult));
dailyLotteryResultRouter.delete("/daily-result/:id", expressAdapterController(deleteDailyLotteryResults));
dailyLotteryResultRouter.get("/daily-results", expressAdapterController(fetchManyDailyLotteryResults));
dailyLotteryResultRouter.get("/last-daily-result", expressAdapterController(getLastDailyLotteryResults));

export default dailyLotteryResultRouter;
