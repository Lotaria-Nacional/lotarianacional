import { Router } from "express";

import { makeLotteryResultController } from "../factories/make-lottery-results.controller";
import { expressAdapterController } from "../../../../core/adapters/express-adapter-controller";
import { PrismaResultRespository } from "../../infrastructure/repositories/prisma/prisma.result.repository";
import { PrismaEmissionRepository } from "../../infrastructure/repositories/prisma/prisma.emission.repository";

const lotteryResultRouter = Router();

const resultRepository = new PrismaResultRespository();
const emissionRepository = new PrismaEmissionRepository();

const {
  createLotteryResult,
  fetchManyLotteryResult,
  removeLotteryResult,
  updateLotteryResult
} = makeLotteryResultController( resultRepository, emissionRepository)

lotteryResultRouter.post("/result", expressAdapterController(createLotteryResult));
lotteryResultRouter.get("/results", expressAdapterController(fetchManyLotteryResult));
lotteryResultRouter.put("/result/:id", expressAdapterController(updateLotteryResult));
lotteryResultRouter.delete("/result/:id", expressAdapterController(removeLotteryResult));

export default lotteryResultRouter;
