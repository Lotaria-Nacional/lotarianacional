import { Request, Response, Router } from "express"

import { PrismaResultRespository } from "../../repositories/prisma/prisma.result.repository"

import { GetResultsUseCase } from "../../../application/useCases/result/get.results.useCase"
import { UpdateResultUseCase } from "../../../application/useCases/result/update.result.useCase"
import { DeleteResultUseCase } from "../../../application/useCases/result/delete.result.useCase"
import { CreateResultUseCase } from "../../../application/useCases/result/create.result.useCase"

import { GetResultsController } from "../controllers/resultControllers/get.results.controller"
import { CreateResultController } from "../controllers/resultControllers/create.result.controller"
import { DeleteResultController } from "../controllers/resultControllers/delete.result.controller"
import { UpdateResultController } from "../controllers/resultControllers/update.result.controller"


const router = Router()

const prismaResultRepository = new PrismaResultRespository()

// USE CASES
const createResultUseCase = new CreateResultUseCase(prismaResultRepository)
const getResultsResultUseCase = new GetResultsUseCase(prismaResultRepository)
const updateResultUseCase = new UpdateResultUseCase(prismaResultRepository)
const deleteResultUseCase = new DeleteResultUseCase(prismaResultRepository)

// CONTROLLERS
const createResultController = new CreateResultController(createResultUseCase)
const getResultsController = new GetResultsController(getResultsResultUseCase)
const updateResultsController = new UpdateResultController(updateResultUseCase)
const deleteResultsController = new DeleteResultController(deleteResultUseCase)

// ROUTES
router.post("/result", (req: Request, res: Response) => {
  createResultController.handle(req, res)
})

router.get("/results", (req: Request, res: Response) => {
  getResultsController.handle(req, res)
})

router.put("/result/:id", (req: Request<{ id: string }>, res: Response) => {
  updateResultsController.handle(req, res)
})

router.delete("/result/:id", (req: Request<{ id: string }>, res: Response) => {
  deleteResultsController.handle(req, res)
})

export default router
