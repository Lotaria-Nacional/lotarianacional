import { Router } from "express"
import { agencyControllerFactory } from "../factories/make-agency-controllers"
import { expressAdapterController } from "../../../../core/adapters/express-adapter-controller"
import { PrismaAgencyRepository } from "../../infrastructure/repositories/prisma/prisma-agency.repository"

const agencyRouter = Router()
const agencyRepository = new PrismaAgencyRepository()

const { createAgency,deleteAgency,fetchManyAgencies,getAgencyById,updateAgency } = agencyControllerFactory(agencyRepository)

agencyRouter.post("/agency", expressAdapterController(createAgency))

agencyRouter.get("/agencies", expressAdapterController(fetchManyAgencies))
agencyRouter.get("/agency/:id", expressAdapterController(getAgencyById))
agencyRouter.put("/agency/:id", expressAdapterController(updateAgency))
agencyRouter.delete("/agency/:id", expressAdapterController(deleteAgency))

export default agencyRouter
