import { Router } from "express"
import { upload } from "@/core/middlewares/multer.middleware"
import { newsRepository } from "@/main/container/repositories"
import { makeNewsController } from "../factories/make-news-controllers"
import { expressAdapterController } from "@/core/adapters/express-adapter-controller"
import { CloudinaryUploadService } from "@/core/services/file-upload/cloudinary-upload-service"

const newsRouter = Router()

const cloudinaryService = new CloudinaryUploadService()

const {
  createNews,
  fetchManyNews,
  getNewsById,
  removeNews,
  updateNews
} = makeNewsController(newsRepository,cloudinaryService)

newsRouter.post("/news", upload.single("image"), expressAdapterController(createNews))
newsRouter.get("/news", expressAdapterController(fetchManyNews))
newsRouter.get("/news/:id", expressAdapterController(getNewsById))
newsRouter.put("/news/:id",upload.single("image"), expressAdapterController(updateNews))
newsRouter.delete("/news/:id", expressAdapterController(removeNews))

export default newsRouter
