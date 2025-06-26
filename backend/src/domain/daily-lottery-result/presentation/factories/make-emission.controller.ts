import { IEmissionRepository } from "../../application/interfaces/emission.repository"
import { FetchManyEmissionsController } from "../controllers/emission/fetch-many-emissions.controller"
import { FetchManyEmissionUseCase } from "../../application/use-cases/emission/fetch-many-emissionUseCase"


export function makeEmissionController(emissionRepo:IEmissionRepository){

    const fetchEmissions = new FetchManyEmissionsController(new FetchManyEmissionUseCase(emissionRepo))
    
    return {
        fetchEmissions
    }

}