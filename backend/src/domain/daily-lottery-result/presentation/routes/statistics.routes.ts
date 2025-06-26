import {  Router } from "express"
import { makeStatisticsController } from "../factories/make-statistics.controller"
import { expressAdapterController } from "../../../../core/adapters/express-adapter-controller"
import { PrismaStatisticRepository } from "../../infrastructure/repositories/prisma/prisma.statistic.repository"

const statisticsRouter = Router()

const statisticRepository = new PrismaStatisticRepository()

const { fetchManyStatistics } = makeStatisticsController(statisticRepository)

statisticsRouter.get("/statistics", expressAdapterController(fetchManyStatistics))

export default statisticsRouter
