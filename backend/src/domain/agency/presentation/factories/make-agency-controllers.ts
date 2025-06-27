import { UpdateAgencyController } from "../controllers/update-agency.controller";
import { CreateAgencyController } from "../controllers/create-agency.controller";
import { DeleteAgencyController } from "../controllers/delete-agency.controller";
import { GetAgencyByIdController } from "../controllers/get-agency-by-id.controller";
import { CreateAgencyUseCase } from "../../application/use-cases/create-agency.useCase";
import { UpdateAgencyUseCase } from "../../application/use-cases/update-agency.useCase";
import { DeleteAgencyUseCase } from "../../application/use-cases/delete-agency.useCase";
import { GetAgencyByIdUseCase } from "../../application/use-cases/get-agency-by-id.useCase";
import { FetchManyAgenciesController } from "../controllers/fetch-many-agencies.controller";
import { IAgencyRespository } from "../../application/interfaces/agency-respository.interface";
import { FetchManyAgenciesUseCase } from "../../application/use-cases/fetch-many-agencies.useCase";

export function agencyControllerFactory(repository:IAgencyRespository){
    const createAgency = new CreateAgencyController(new CreateAgencyUseCase(repository))
    const updateAgency = new UpdateAgencyController(new UpdateAgencyUseCase(repository))
    const deleteAgency = new DeleteAgencyController(new DeleteAgencyUseCase(repository))
    const getAgencyById = new GetAgencyByIdController(new GetAgencyByIdUseCase(repository))
    const fetchManyAgencies = new FetchManyAgenciesController(new FetchManyAgenciesUseCase(repository))

    return { createAgency,updateAgency, getAgencyById, deleteAgency, fetchManyAgencies }
}