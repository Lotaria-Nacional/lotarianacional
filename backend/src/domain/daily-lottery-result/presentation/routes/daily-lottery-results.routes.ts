import { Router } from "express";

import { makeDailyLotteryResults } from "../factories/make-daily-lottery-results.controller";
import { expressAdapterController } from "../../../../core/adapters/express-adapter-controller";
import { dailyResultRepo, emissionRepo, statisticService } from "../../../../main/container/repositories";

const dailyLotteryResultRouter = Router();

const { createDailyLotteryResult, deleteDailyLotteryResults, fetchManyDailyLotteryResults, getLastDailyLotteryResults } = makeDailyLotteryResults(
  dailyResultRepo,
  emissionRepo,
  statisticService,
);

dailyLotteryResultRouter.post("/", expressAdapterController(createDailyLotteryResult));
dailyLotteryResultRouter.delete("/:id", expressAdapterController(deleteDailyLotteryResults));
dailyLotteryResultRouter.get("/", expressAdapterController(fetchManyDailyLotteryResults));
dailyLotteryResultRouter.get("/last", expressAdapterController(getLastDailyLotteryResults));

export default dailyLotteryResultRouter;
