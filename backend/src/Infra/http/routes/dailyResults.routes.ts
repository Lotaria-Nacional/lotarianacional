import { Request, Response, Router } from "express"

import { PrismaDailyResultsRespository } from "../../repositories/prisma/prisma.dailyResults.respository"

import { GetDailyResultsUseCase } from "../../../application/useCases/dailyResult/get.dailyResults.useCase"
import { DeleteDailyResultUseCase } from "../../../application/useCases/dailyResult/delete.dailyResult.useCase"
import { CreateDailyResultUseCase } from "../../../application/useCases/dailyResult/create.dailyResult.useCase"

import { GetDailyResultsController } from "../controllers/dailyResultsControllers/get.dailyResults.controller"
import { DeleteDailyResultsController } from "../controllers/dailyResultsControllers/delete.dailyResult.controller"
import { CreateDailyResultsController } from "../controllers/dailyResultsControllers/create.dailyResult.controller"
import { GetLastDailyResultUseCase } from "../../../application/useCases/dailyResult/get.lastDailyResult.useCase"
import { GetLastDailyResultController } from "../controllers/dailyResultsControllers/get.LastDailyResult.controller"

const router = Router()
//REPOSITORIES
const prismaDailyResult = new PrismaDailyResultsRespository()

//USE CASES
const createDailyResultsUseCase = new CreateDailyResultUseCase(
  prismaDailyResult
)
const getDailyResultsUseCase = new GetDailyResultsUseCase(prismaDailyResult)
const getLastDailyResultsUseCase = new GetLastDailyResultUseCase(
  prismaDailyResult
)
const deleteDailyResultUseCase = new DeleteDailyResultUseCase(prismaDailyResult)

//CONTROLLERS
const createDailyResultsController = new CreateDailyResultsController(
  createDailyResultsUseCase
)
const getDailyResultsController = new GetDailyResultsController(
  getDailyResultsUseCase
)
const getLastDailyResultsController = new GetLastDailyResultController(
  getLastDailyResultsUseCase
)
const deleteDailyResultController = new DeleteDailyResultsController(
  deleteDailyResultUseCase
)

//ROUTES
router.post("/daily-result", (req: Request, res: Response) => {
  createDailyResultsController.handle(req, res)
})
router.get("/daily-results", (req: Request, res: Response) => {
  getDailyResultsController.handle(req, res)
})
router.get("/last-daily-result", (req: Request, res: Response) => {
  getLastDailyResultsController.handle(req, res)
})
router.delete("/daily-result/:id", (req: Request, res: Response) => {
  deleteDailyResultController.handle(req, res)
})

export default router
