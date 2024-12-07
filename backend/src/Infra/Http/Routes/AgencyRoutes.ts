import { Request, Response, Router } from "express"

import { PrismaAgencyRepository } from "../../Repositories/prisma/PrismaAgencyRepository"
import { GetAgenciesUseCase } from "../../../Application/UseCases/Agency/GetAgenciesUseCase"
import { GetAgenciesController } from "../Controllers/AgencyControllers/GetAgenciesController"
import { CreateAgencyUseCase } from "../../../Application/UseCases/Agency/CreateAgencyUseCase"
import { CreateAgencyController } from "../Controllers/AgencyControllers/CreateAgencyController"
import { GetAgencyByIdUseCase } from "../../../Application/UseCases/Agency/GetAgencyByIdUseCase"
import { GetAgencyByIdController } from "../Controllers/AgencyControllers/GetAgenctByIdController"
import { UpdateAgencyController } from "../Controllers/AgencyControllers/UpdateAgencyController"
import { UpdateAgencyUseCase } from "../../../Application/UseCases/Agency/UpdateAgencyUseCase"
import { DeleteAgencyController } from "../Controllers/AgencyControllers/DeleteAgencyController"
import { DeleteAgencyUseCase } from "../../../Application/UseCases/Agency/DeleteAgencyUseCase"

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
