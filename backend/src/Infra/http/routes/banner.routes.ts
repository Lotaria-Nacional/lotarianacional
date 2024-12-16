import { Router } from "express"

import { GetBannersUseCase } from "../../../application/useCases/banner/get.banners.useCase"
import { CreateBannerUseCase } from "../../../application/useCases/banner/create.banner.useCase"

import { PrismaBannerRepository } from "../../repositories/prisma/prisma.banner.repository"
import { CloudinaryUploadService } from "../../Services/ImageUpload/CloudinaryUploadService"

import { GetBannersController } from "../controllers/bannerControllers/get.banners.controller"

import { CreateDesktopBannerController } from "../controllers/bannerControllers/create.desktop.banner.controller"
import { CreateMobileBannerController } from "../controllers/bannerControllers/create.mobile.banner.controller"

import { upload } from "../middlewares/multer.middleware"
import { UpdateBannerUseCase } from "../../../application/useCases/banner/update.banner.useCase"
import { UpdateDesktopBannersController } from "../controllers/bannerControllers/update.desktop.controller"
import { UpdateMobileBannersController } from "../controllers/bannerControllers/update.mobile.controller"
import { DeleteBannerController } from "../controllers/bannerControllers/delete.banner.controller"
import { DeleteBannerUseCase } from "../../../application/useCases/banner/delete.banner.useCase"

const router = Router()
const bannerRepository = new PrismaBannerRepository()
const cloudinaryService = new CloudinaryUploadService()

//POST
const createBannerUseCase = new CreateBannerUseCase(
  bannerRepository,
  cloudinaryService
)
const updateBannerUseCase = new UpdateBannerUseCase(
  bannerRepository,
  cloudinaryService
)
const createDesktopBannerController = new CreateDesktopBannerController(
  createBannerUseCase
)
const createMobileBannerController = new CreateMobileBannerController(
  createBannerUseCase
)

//PUT
const updateDesktopBannerController = new UpdateDesktopBannersController(updateBannerUseCase)
const updateMobileBannerController = new UpdateMobileBannersController(updateBannerUseCase)

//GET
const getBannerUseCase = new GetBannersUseCase(bannerRepository)
const getBannersController = new GetBannersController(getBannerUseCase)
//DELETE
const deleteBannerUseCase = new DeleteBannerUseCase(bannerRepository, cloudinaryService)
const deleteBannersController = new DeleteBannerController(deleteBannerUseCase)

router.post("/banner/desktop", upload.array("banners", 3), (req, res) => {
  createDesktopBannerController.handle(req, res)
})
router.post("/banner/mobile", upload.array("banners", 3), (req, res) => {
  createMobileBannerController.handle(req, res)
})
router.put("/banner/desktop/:id", upload.array("banners", 3), (req, res) => {
  updateDesktopBannerController.handle(req, res)
})
router.put("/banner/mobile/:id", upload.array("banners", 3), (req, res) => {
  updateMobileBannerController.handle(req, res)
})
router.get("/banners", (req, res) => {
  getBannersController.handle(req, res)
})
router.delete("/banner/:id", (req, res) => {
  deleteBannersController.handle(req, res)
})

export default router
