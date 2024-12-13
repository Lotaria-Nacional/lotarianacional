import { Request, Response, Router } from "express"
import { DeleteDailyResultUseCase } from "../../../application/useCases/dailyResult/delete.dailyResult.useCase"
import { PrismaDailyResultsRespository } from "../../repositories/prisma/prisma.dailyResults.respository"
import { DeleteDailyResultsController } from "../controllers/dailyResultsControllers/delete.dailyResult.controller"

const router = Router()

const prismaDailyResult = new PrismaDailyResultsRespository()
//DELETE
const deleteDailyResultUseCase = new DeleteDailyResultUseCase(prismaDailyResult)
const deleteDailyResultController = new DeleteDailyResultsController(
  deleteDailyResultUseCase
)

router.delete("/dailyResult/:id", (req: Request, res: Response) => {
  deleteDailyResultController.handle(req, res)
})

export default router
