import {  Router } from "express"
import { statisticRespo } from "@/main/container/repositories"
import { makeStatisticsController } from "../factories/make-statistics.controller"
import { expressAdapterController } from "@/core/adapters/express-adapter-controller"

const statisticsRouter = Router()

const { fetchManyStatistics } = makeStatisticsController(statisticRespo)

statisticsRouter.get("/statistics", expressAdapterController(fetchManyStatistics))

export default statisticsRouter
