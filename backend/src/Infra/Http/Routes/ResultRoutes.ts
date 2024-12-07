import { Request, Response, Router } from "express"
import { PrismaResultRespository } from "../../Repositories/prisma/PrismaResultRepository"

import { CreateResultUseCase } from "../../../Application/UseCases/Result/CreateResultUseCase"
import { GetResultsUseCase } from "../../../Application/UseCases/Result/GetResultsUseCase"
import { UpdateResultUseCase } from "../../../Application/UseCases/Result/UpdateResultUseCase"
import { DeleteResultUseCase } from "../../../Application/UseCases/Result/DeleteResultUseCase"

import { CreateResultController } from "../Controllers/ResultControllers/CreateResultController"
import { GetResultsController } from "../Controllers/ResultControllers/GetResultsController"
import { UpdateResultController } from "../Controllers/ResultControllers/UpdateResultController"
import { DeleteResultController } from "../Controllers/ResultControllers/DeleteResultController"

const router = Router()

const prismaResultRepository = new PrismaResultRespository()

const getResultsController = new GetResultsController(
  new GetResultsUseCase(prismaResultRepository)
)
const createResultController = new CreateResultController(
  new CreateResultUseCase(prismaResultRepository)
)
const updateResultController = new UpdateResultController(
  new UpdateResultUseCase(prismaResultRepository)
)
const deleteResultController = new DeleteResultController(
  new DeleteResultUseCase(prismaResultRepository)
)

router.post("/result", (req: Request, res: Response) => {
  createResultController.handle(req, res)
})
router.get("/results", (req: Request, res: Response) => {
  getResultsController.handle(req, res)
})
router.put("/result/:id", (req: Request<{ id: string }>, res: Response) => {
  updateResultController.handle(req, res)
})
router.delete("/result/:id", (req: Request<{ id: string }>, res: Response) => {
  deleteResultController.handle(req, res)
})

export default router
