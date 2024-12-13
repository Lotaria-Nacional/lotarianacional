import { Request, Response, Router } from "express"

// import { CreateResultUseCase } from "../../../application/useCases/result/create.result.useCase"
import { GetResultsUseCase } from "../../../application/useCases/result/get.results.useCase"
import { UpdateResultUseCase } from "../../../application/useCases/result/update.result.useCase"
import { DeleteResultUseCase } from "../../../application/useCases/result/delete.result.useCase"
import { PrismaDailyResultsRespository } from "../../repositories/prisma/prisma.dailyResults.respository"
import { PrismaResultRespository } from "../../repositories/prisma/prisma.result.repository"
import { CreateResultController } from "../controllers/resultControllers/create.result.controller"
import { DeleteResultController } from "../controllers/resultControllers/delete.result.controller"
import { GetResultsController } from "../controllers/resultControllers/get.results.controller"
import { UpdateResultController } from "../controllers/resultControllers/update.result.controller"
import { CreateDailyResultUseCase } from "../../../application/useCases/dailyResult/create.dailyResult.useCase"
import { CreateResultUseCase } from "../../../application/useCases/result/create.result.useCase"

const router = Router()

const prismaResultRepository = new PrismaResultRespository()
const prismaDailyResultRepository = new PrismaDailyResultsRespository()

const getResultsController = new GetResultsController(
  new GetResultsUseCase(prismaDailyResultRepository)
)

// const createResultController = new CreateResultController(
//   new CreateDailyResultUseCase(prismaDailyResultRepository)
// )
const createResultController = new CreateResultController(
  new CreateResultUseCase(prismaDailyResultRepository)
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
