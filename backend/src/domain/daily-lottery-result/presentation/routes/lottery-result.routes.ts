import { Router } from "express";

import { emissionRepo, lotteryResultRepo } from "../../../../main/container/repositories";
import { makeLotteryResultController } from "../factories/make-lottery-results.controller";
import { expressAdapterController } from "../../../../core/adapters/express-adapter-controller";

const lotteryResultRouter = Router();

const { createLotteryResult, fetchManyLotteryResult, removeLotteryResult, updateLotteryResult } = makeLotteryResultController(lotteryResultRepo, emissionRepo);

lotteryResultRouter.post("/", expressAdapterController(createLotteryResult));
lotteryResultRouter.get("/", expressAdapterController(fetchManyLotteryResult));
lotteryResultRouter.put("/:id", expressAdapterController(updateLotteryResult));
lotteryResultRouter.delete("/:id", expressAdapterController(removeLotteryResult));

export default lotteryResultRouter;
