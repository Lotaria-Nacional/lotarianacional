import { Router } from "express"
import { PrismaBannerRepository } from "../../repositories/prisma/prisma.banner.repository"
import { CloudinaryUploadService } from "../../services/imageUpload/cloudinaryUploadService"
import { CreateBannerController } from "../controllers/bannerControllers/create.banner.controller"
import { CreateBannerUseCase } from "../../../application/useCases/banner/create.banner.useCase"
import { GetBannersUseCase } from "../../../application/useCases/banner/get.banners.useCase"
import { GetBannersController } from "../controllers/bannerControllers/get.banners.controller"
import { upload } from "../middlewares/multer.middleware"

const router = Router()
const bannerRepository = new PrismaBannerRepository()
const cloudinaryService = new CloudinaryUploadService()

//POST
const createBannerUseCase = new CreateBannerUseCase(
  bannerRepository,
  cloudinaryService
)
const createBannerController = new CreateBannerController(createBannerUseCase)

//GET
const getBannerUseCase = new GetBannersUseCase(bannerRepository)
const getBannersController = new GetBannersController(getBannerUseCase)

router.post("/banner", (req, res) => {
  createBannerController.handle(req, res)
})
router.get("/banners", (req, res) => {
  getBannersController.handle(req, res)
})

export default router
