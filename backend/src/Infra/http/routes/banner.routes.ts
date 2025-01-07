import { Request, Response, Router } from "express";

import { GetBannersUseCase } from "../../../application/useCases/banner/get.banners.useCase";
import { CreateDesktopBannerUseCase } from "../../../application/useCases/banner/create.desktopBanner.useCase";

import { PrismaBannerRepository } from "../../repositories/prisma/prisma.banner.repository";
import { CloudinaryUploadService } from "../../Services/ImageUpload/CloudinaryUploadService";

import { GetBannersController } from "../controllers/bannerControllers/get.banners.controller";

import { CreateDesktopBannerController } from "../controllers/bannerControllers/create.desktop.banner.controller";
import { CreateMobileBannerController } from "../controllers/bannerControllers/create.mobile.banner.controller";

import { uploadDeskFiles, uploadMobFiles } from "../middlewares/multer.middleware";
import { UpdateBannerUseCase } from "../../../application/useCases/banner/update.banner.useCase";
import { UpdateDesktopBannersController } from "../controllers/bannerControllers/update.desktop.controller";
import { UpdateMobileBannersController } from "../controllers/bannerControllers/update.mobile.controller";
import { DeleteBannerController } from "../controllers/bannerControllers/delete.banner.controller";
import { DeleteBannerUseCase } from "../../../application/useCases/banner/delete.banner.useCase";
import { CreateMobileBannerUseCase } from "../../../application/useCases/banner/create.mobileBanner.useCase";

const router = Router();
const bannerRepository = new PrismaBannerRepository();
const cloudinaryService = new CloudinaryUploadService();

//POST
const createDesktopBannerUseCase = new CreateDesktopBannerUseCase(bannerRepository, cloudinaryService);
const createMobileBannerUseCase = new CreateMobileBannerUseCase(bannerRepository, cloudinaryService);

const updateBannerUseCase = new UpdateBannerUseCase(bannerRepository, cloudinaryService);
const createDesktopBannerController = new CreateDesktopBannerController(createDesktopBannerUseCase);
const createMobileBannerController = new CreateMobileBannerController(createMobileBannerUseCase);

//PUT
const updateDesktopBannerController = new UpdateDesktopBannersController(updateBannerUseCase);
const updateMobileBannerController = new UpdateMobileBannersController(updateBannerUseCase);

//GET
const getBannerUseCase = new GetBannersUseCase(bannerRepository);
const getBannersController = new GetBannersController(getBannerUseCase);
//DELETE
const deleteBannerUseCase = new DeleteBannerUseCase(bannerRepository, cloudinaryService);
const deleteBannersController = new DeleteBannerController(deleteBannerUseCase);

router.post("/banner/desktop", uploadDeskFiles, (req: Request, res: Response) => {
  createDesktopBannerController.handle(req, res);
});
router.post("/banner/mobile", uploadMobFiles, (req: Request, res: Response) => {
  createMobileBannerController.handle(req, res);
});
router.put("/banner/desktop/:id", uploadDeskFiles, (req: Request, res: Response) => {
  updateDesktopBannerController.handle(req, res);
});
router.put("/banner/mobile/:id", uploadMobFiles, (req: Request, res: Response) => {
  updateMobileBannerController.handle(req, res);
});
router.get("/banners", (req: Request, res: Response) => {
  getBannersController.handle(req, res);
});
router.delete("/banner/:id", (req: Request, res: Response) => {
  deleteBannersController.handle(req, res);
});

export default router;
