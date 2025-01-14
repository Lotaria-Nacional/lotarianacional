import { Request, Response, Router } from "express";
import { upload } from "../middlewares/multer.middleware";
import { CreateBannerUseCase } from "../../../application/useCases/banner/create.banner.useCase";
import { PrismaBannerRepository } from "../../repositories/prisma/prisma.banner.repository";
import { CloudinaryUploadService } from "../../Services/ImageUpload/CloudinaryUploadService";
import { CreateBannerController } from "../controllers/bannerControllers/create.desktop.banner.controller";
import { GetAllBannersUseCase } from "../../../application/useCases/banner/get.banners.useCase";
import { GetAllBannersController } from "../controllers/bannerControllers/getAll.banners.controller";
import { UpdateBannerController } from "../controllers/bannerControllers/update.banner.controller";
import { UpdateBannerUseCase } from "../../../application/useCases/banner/update.banner.useCase";
import { DeleteBannerUseCase } from "../../../application/useCases/banner/delete.banner.useCase";
import { DeleteBannerController } from "../controllers/bannerControllers/delete.banner.controller";

const router = Router();

const prismaBannerRepository = new PrismaBannerRepository();
const cloudinaryService = new CloudinaryUploadService();

const createBannerUseCase = new CreateBannerUseCase(prismaBannerRepository, cloudinaryService);
const createBannerController = new CreateBannerController(createBannerUseCase);

const getAllBannersUseCase = new GetAllBannersUseCase(prismaBannerRepository);
const getAllBannersController = new GetAllBannersController(getAllBannersUseCase);

const updateBannerUseCase = new UpdateBannerUseCase(prismaBannerRepository, cloudinaryService);
const updateBannerController = new UpdateBannerController(updateBannerUseCase);

const deleteBannerUseCase = new DeleteBannerUseCase(prismaBannerRepository, cloudinaryService);
const deleteBannerController = new DeleteBannerController(deleteBannerUseCase);

router.post("/banner", upload.single("banner"), (req: Request, res: Response) => {
  createBannerController.handle(req, res);
});
router.get("/banner", (req: Request, res: Response) => {
  getAllBannersController.handle(req, res);
});
router.put("/banner/:id", upload.single("banner"), (req: Request, res: Response) => {
  updateBannerController.handle(req, res);
});
router.delete("/banner/:id", (req: Request, res: Response) => {
  deleteBannerController.handle(req, res);
});

export default router;
