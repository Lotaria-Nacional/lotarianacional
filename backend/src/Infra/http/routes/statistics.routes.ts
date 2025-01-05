import { Request, Response, Router } from "express"
import { PrismaStatisticRepository } from "../../repositories/prisma/prisma.statistic.repository"
import { GetStatisticUseCase } from "../../../application/useCases/statistic/getStatistics.useCase"
import { GetStatisticsController } from "../controllers/statisticControllers/getStatistics.controlller"

const router = Router()

const statisticRepository = new PrismaStatisticRepository()

const getStatisticUseCase = new GetStatisticUseCase(statisticRepository)
const getStatisticController = new GetStatisticsController(getStatisticUseCase)

router.get("/statistics", (req: Request, res: Response) => {
  getStatisticController.handle(req, res)
})

export default router
