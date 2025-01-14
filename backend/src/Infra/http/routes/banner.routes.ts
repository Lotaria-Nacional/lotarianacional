import { Request, Response, Router } from "express";
import { uploadBannerFile } from "../middlewares/multer.middleware";

import { PrismaBannerRepository } from "../../repositories/prisma/prisma.banner.repository";
import { CloudinaryUploadService } from "../../Services/ImageUpload/CloudinaryUploadService";

import { CreateBannerUseCase } from "../../../application/useCases/banner/create.banner.useCase";
import { GetBannersUseCase } from "../../../application/useCases/banner/get.banners.useCase";
import { DeleteBannerUseCase } from "../../../application/useCases/banner/delete.banner.useCase";

import { CreateBannerController } from "../controllers/bannerControllers/create.desktop.banner.controller";
import { GetBannersController } from "../controllers/bannerControllers/get.banners.controller";
import { UpdateBannerController } from "../controllers/bannerControllers/update.banner.controller";
import { DeleteBannerController } from "../controllers/bannerControllers/delete.banner.controller";
import { UpdateBannerUseCase } from "../../../application/useCases/banner/update.banner.useCase";

const router = Router();
const bannerRepository = new PrismaBannerRepository();
const cloudinaryService = new CloudinaryUploadService();

// #################################### USE CASES #######################################

const getBannerUseCase = new GetBannersUseCase(bannerRepository);
const createBannerUseCase = new CreateBannerUseCase(bannerRepository, cloudinaryService);
const updateBannerUseCase = new UpdateBannerUseCase(bannerRepository, cloudinaryService);
const deleteBannerUseCase = new DeleteBannerUseCase(bannerRepository, cloudinaryService);

// #################################### CONTROLLERS ####################################

const getBannersController = new GetBannersController(getBannerUseCase);
const createBannerController = new CreateBannerController(createBannerUseCase);
const updateBannerController = new UpdateBannerController(updateBannerUseCase);
const deleteBannersController = new DeleteBannerController(deleteBannerUseCase);

// ################################### ROUTES ###########################################

router.post("/banner", uploadBannerFile, (req: Request, res: Response) => {
  createBannerController.handle(req, res);
});

router.get("/banner", (req: Request, res: Response) => {
  getBannersController.handle(req, res);
});
// router.put("/banner/:id", uploadBannerFile, (req: Request, res: Response) => {
//   updateBannerController.handle(req, res);
// });
router.put("/banner", (req: Request, res: Response) => {
  deleteBannersController.handle(req, res);
});

export default router;
