import { IEmissionRepository } from "../../application/interfaces/emission.repository";
import { NumberStatisticService } from "../../application/use-cases/statistics/create-statistics.useCase";
import { IDailyLotteryResultRespository } from "../../application/interfaces/daily-lottery-result.repository";
import { CreateDailyResultsController } from "../controllers/daily-lottery-result/create-daily-lottery-result.controller";
import { DeleteDailyResultsController } from "../controllers/daily-lottery-result/delete-daily-lottery-result.controller";
import { GetLastDailyResultController } from "../controllers/daily-lottery-result/get-last-daily-lottery-result.controller";
import { DeleteDailyResultUseCase } from "../../application/use-cases/daily-lottery-result/delete-daily-lottery-result.useCase";
import { CreateDailyResultUseCase } from "../../application/use-cases/daily-lottery-result/create-daily-lottery-result.useCase";
import { GetLastDailyResultUseCase } from "../../application/use-cases/daily-lottery-result/get-last-daily-lottery-result.useCase";
import { FetchManyDailyLotteryResultsController } from "../controllers/daily-lottery-result/fetch-many-daily-lottery-results.controller";
import { FetchManyDailyLotteryResultsUseCase } from "../../application/use-cases/daily-lottery-result/fetch-manny-daily-lottery-result.useCase";

export function makeDailyLotteryResults(dailyResultRepository:IDailyLotteryResultRespository, emissionRepo:IEmissionRepository, numberStatisticsService:NumberStatisticService) {
    
    const createDailyLotteryResult = new CreateDailyResultsController(new CreateDailyResultUseCase(dailyResultRepository,emissionRepo,numberStatisticsService))
    const fetchManyDailyLotteryResults = new FetchManyDailyLotteryResultsController(new FetchManyDailyLotteryResultsUseCase(dailyResultRepository))
    const deleteDailyLotteryResults = new DeleteDailyResultsController(new DeleteDailyResultUseCase(dailyResultRepository))
    const getLastDailyLotteryResults = new GetLastDailyResultController(new GetLastDailyResultUseCase(dailyResultRepository))
    
    return {
        createDailyLotteryResult,
        fetchManyDailyLotteryResults,
        deleteDailyLotteryResults,
        getLastDailyLotteryResults
    }

}