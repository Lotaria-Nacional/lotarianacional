import { Router } from "express";

import { emissionRepo, lotteryResultRepo } from "@/main/container/repositories";
import { makeLotteryResultController } from "../factories/make-lottery-results.controller";
import { expressAdapterController } from "@/core/adapters/express-adapter-controller";

const lotteryResultRouter = Router();

const {
  createLotteryResult,
  fetchManyLotteryResult,
  removeLotteryResult,
  updateLotteryResult
} = makeLotteryResultController( lotteryResultRepo, emissionRepo)

lotteryResultRouter.post("/result", expressAdapterController(createLotteryResult));
lotteryResultRouter.get("/results", expressAdapterController(fetchManyLotteryResult));
lotteryResultRouter.put("/result/:id", expressAdapterController(updateLotteryResult));
lotteryResultRouter.delete("/result/:id", expressAdapterController(removeLotteryResult));

export default lotteryResultRouter;
