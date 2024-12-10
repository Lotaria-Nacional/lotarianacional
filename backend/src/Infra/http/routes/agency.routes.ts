import { Request, Response, Router } from "express"

import { PrismaAgencyRepository } from "../../repositories/prisma/prisma.agency.repository"
import { GetAgenciesUseCase } from "../../../application/useCases/agency/get.agencies.useCase"
import { GetAgenciesController } from "../controllers/agencyControllers/get.agencies.controller"
import { CreateAgencyUseCase } from "../../../application/useCases/agency/create.agency.useCase"
import { CreateAgencyController } from "../controllers/agencyControllers/create.agency.controller"
import { GetAgencyByIdUseCase } from "../../../application/useCases/agency/get.agencyById.useCase"
import { GetAgencyByIdController } from "../controllers/agencyControllers/get.agenctById.controller"
import { UpdateAgencyController } from "../controllers/agencyControllers/update.agency.controller"
import { UpdateAgencyUseCase } from "../../../application/useCases/agency/update.agency.useCase"
import { DeleteAgencyController } from "../controllers/agencyControllers/delete.agency.controller"
import { DeleteAgencyUseCase } from "../../../application/useCases/agency/delete.agency.useCase"

const router = Router()
const prismaAgencyRepository = new PrismaAgencyRepository()

//CREATE
const createAgencyUseCase = new CreateAgencyUseCase(prismaAgencyRepository)
const createAgencyController = new CreateAgencyController(createAgencyUseCase)
//GET ALL
const getAgenciesUseCase = new GetAgenciesUseCase(prismaAgencyRepository)
const getAgenciesController = new GetAgenciesController(getAgenciesUseCase)
//GET BY ID
const getAgencyByIdUseCase = new GetAgencyByIdUseCase(prismaAgencyRepository)
const getAgencyByIdController = new GetAgencyByIdController(
  getAgencyByIdUseCase
)
//UPDATE
const updateAgencyUseCase = new UpdateAgencyUseCase(prismaAgencyRepository)
const updateAgencyController = new UpdateAgencyController(updateAgencyUseCase)
//DELETE
const deleteAgencyUseCase = new DeleteAgencyUseCase(prismaAgencyRepository)
const deleteAgencyController = new DeleteAgencyController(deleteAgencyUseCase)

router.post("/agency", (req: Request, res: Response) => {
  createAgencyController.handle(req, res)
})
router.get("/agencies", (req: Request, res: Response) => {
  getAgenciesController.handle(req, res)
})
router.get("/agency/:id", (req: Request<{ id: string }>, res: Response) => {
  getAgencyByIdController.handle(req, res)
})
router.put("/agency/:id", (req: Request<{ id: string }>, res: Response) => {
  updateAgencyController.handle(req, res)
})
router.delete("/agency/:id", (req: Request<{ id: string }>, res: Response) => {
  deleteAgencyController.handle(req, res)
})

export default router
