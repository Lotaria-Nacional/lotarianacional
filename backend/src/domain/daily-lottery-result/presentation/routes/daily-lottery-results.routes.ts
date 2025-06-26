import { Router } from "express";

import { makeDailyLotteryResults } from "../factories/make-daily-lottery-results.controller";
import { expressAdapterController } from "../../../../core/adapters/express-adapter-controller";
import { NumberStatisticService } from "../../application/use-cases/statistics/create-statistics.useCase";
import { PrismaEmissionRepository } from "../../infrastructure/repositories/prisma/prisma.emission.repository";
import { PrismaStatisticRepository } from "../../infrastructure/repositories/prisma/prisma.statistic.repository";
import { PrismaDailyLotteryResultsRespository } from "../../infrastructure/repositories/prisma/prisma-daily-lottery-result.respository";

const dailyLotteryResultRouter = Router();

const dailyResultRepo = new PrismaDailyLotteryResultsRespository();
const emissionRepo = new PrismaEmissionRepository();
const statisticRespo = new PrismaStatisticRepository()
const statisticService = new NumberStatisticService(dailyResultRepo,statisticRespo)

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

// dailyLotteryResultRouter.get("/all-daily-results", (req: Request, res: Response) => { getAllDailyResultsController.handle(req, res);});

export default dailyLotteryResultRouter;
