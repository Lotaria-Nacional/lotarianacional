import { IStatisticRepository } from "../../application/interfaces/statistic.repository"
import { FetchManyStatisticsController } from "../controllers/statistics/fetch-many-statistics.controlller"
import { FetchManyStatisticsUseCase } from "../../application/use-cases/statistics/fetch-many-statistics.useCase"

export function makeStatisticsController(statisticsRepo:IStatisticRepository){
    const fetchManyStatistics = new FetchManyStatisticsController(new FetchManyStatisticsUseCase(statisticsRepo))
    
    return {
        fetchManyStatistics
    }
}