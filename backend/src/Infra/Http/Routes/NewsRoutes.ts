import { Request, Response, Router } from "express"

import { PrismaNewsRespository } from "../../Repositories/prisma/PrismaNewsRepository"

import { CreateNewsUseCase } from "../../../Application/UseCases/News/CreateNewsUseCase"
import { GetNewsUseCase } from "../../../Application/UseCases/News/GetNewsUseCase"
import { GetNewsByIdUseCase } from "../../../Application/UseCases/News/GetNewsByIdUseCase"
import { UpdateNewsUseCase } from "../../../Application/UseCases/News/UpdateNewsUseCase"
import { DeleteNewsUseCase } from "../../../Application/UseCases/News/DeleteNewsUseCase"

import { CreateNewsController } from "../Controllers/NewsControllers/CreateNewsController"
import { GetNewsController } from "../Controllers/NewsControllers/GetNewsController"
import { GetNewsByIdController } from "../Controllers/NewsControllers/GetNewsByIdController"
import { UpdateNewsController } from "../Controllers/NewsControllers/UpdateNewsController"
import { DeleteNewsController } from "../Controllers/NewsControllers/DeleteNewsController"

import { CloudinaryUploadService } from "../../Services/ImageUpload/CloudinaryUploadService"
import { upload } from "../Middlewares/MulterMiddleware"

const router = Router()

const prismaNewsRepository = new PrismaNewsRespository()
const cloudinaryUploadService = new CloudinaryUploadService()

//CREATE NEWS
const createNewsUseCase = new CreateNewsUseCase(
  prismaNewsRepository,
  cloudinaryUploadService
)
const createNewsController = new CreateNewsController(createNewsUseCase)

//UPDATE NEWS
const updateNewsUseCase = new UpdateNewsUseCase(
  prismaNewsRepository,
  cloudinaryUploadService
)
const updateNewsController = new UpdateNewsController(updateNewsUseCase)

//GET NEWS
const getNewsUseCase = new GetNewsUseCase(prismaNewsRepository)
const getNewsController = new GetNewsController(getNewsUseCase)

//GET NEWS BY ID
const newsByIdUseCase = new GetNewsByIdUseCase(prismaNewsRepository)
const getNewsByIdController = new GetNewsByIdController(newsByIdUseCase)

//DELETE NEWS
const deleteNewsUseCase = new DeleteNewsUseCase(
  prismaNewsRepository,
  cloudinaryUploadService
)
const deleteNewsController = new DeleteNewsController(deleteNewsUseCase)

router.post("/news", upload.single("image"), (req: Request, res: Response) => {
  createNewsController.handle(req, res)
})
router.get("/news", (req: Request, res: Response) => {
  getNewsController.handle(req, res)
})
router.get("/news/:id", (req: Request<{ id: string }>, res: Response) => {
  getNewsByIdController.handle(req, res)
})
router.put(
  "/news/:id",
  upload.single("image"),
  (req: Request<{ id: string }>, res: Response) => {
    updateNewsController.handle(req, res)
  }
)
router.delete("/news/:id", (req: Request<{ id: string }>, res: Response) => {
  deleteNewsController.handle(req, res)
})

export default router
