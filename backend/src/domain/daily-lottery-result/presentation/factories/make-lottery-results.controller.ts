import { IEmissionRepository } from "../../application/interfaces/emission.repository";
import { ILotteryResultRepository } from "../../application/interfaces/lottery-result.respository";
import { CreateLotteryResultController } from "../controllers/lottery-result/create-lottery-result.controller";
import { UpdateLotteryResultController } from "../controllers/lottery-result/update-lottery-result.controller";
import { DeleteLotteryResultController } from "../controllers/lottery-result/delete-lottery-result.controller";
import { CreateLotteryResultUseCase } from "../../application/use-cases/lottery-result/create-lottery-result.useCase";
import { UpdateLotteryResultUseCase } from "../../application/use-cases/lottery-result/update-lottery-result.useCase";
import { DeleteLotteryResultUseCase } from "../../application/use-cases/lottery-result/delete-lottery-result.useCase";
import { FetchManyLotteryResultsController } from "../controllers/lottery-result/fetch-many-lottery-results.controller";
import { FetchManyLotteryResultsUseCase } from "../../application/use-cases/lottery-result/fetch-many-lottery-result.useCase";

export function makeLotteryResultController(resultRepository:ILotteryResultRepository, emissionRepo:IEmissionRepository) {
    
    const createLotteryResult = new CreateLotteryResultController(new CreateLotteryResultUseCase(resultRepository))    
    const updateLotteryResult = new UpdateLotteryResultController(new UpdateLotteryResultUseCase(resultRepository, emissionRepo))    
    const removeLotteryResult = new DeleteLotteryResultController(new DeleteLotteryResultUseCase(resultRepository))    
    const fetchManyLotteryResult = new FetchManyLotteryResultsController(new FetchManyLotteryResultsUseCase(resultRepository))    

    return {
        createLotteryResult,
        updateLotteryResult,
        removeLotteryResult,
        fetchManyLotteryResult
    }

}