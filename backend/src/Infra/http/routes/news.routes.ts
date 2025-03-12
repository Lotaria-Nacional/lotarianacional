import { Request, Response, Router } from "express"

import { CreateNewsUseCase } from "../../../application/useCases/news/create.news.useCase"
import { GetNewsUseCase } from "../../../application/useCases/news/get.news.useCase"
import { GetNewsByIdUseCase } from "../../../application/useCases/news/get.newsById.useCase"
import { UpdateNewsUseCase } from "../../../application/useCases/news/update.news.useCase"
import { DeleteNewsUseCase } from "../../../application/useCases/news/delete.news.useCase"


import { upload } from "../middlewares/multer.middleware"
import { PrismaNewsRespository } from "../../repositories/prisma/prisma.news.repository"
import { CreateNewsController } from "../controllers/newsControllers/create.news.controller"
import { DeleteNewsController } from "../controllers/newsControllers/delete.news.controller"
import { GetNewsController } from "../controllers/newsControllers/get.news.controller"
import { GetNewsByIdController } from "../controllers/newsControllers/get.newsById.controller"
import { UpdateNewsController } from "../controllers/newsControllers/update.news.controller"
import { CloudinaryUploadService } from "../../Services/ImageUpload/CloudinaryUploadService"

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
