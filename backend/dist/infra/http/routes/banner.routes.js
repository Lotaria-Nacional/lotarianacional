"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_banner_repository_1 = require("../../repositories/prisma/prisma.banner.repository");
const cloudinaryUploadService_1 = require("../../services/imageUpload/cloudinaryUploadService");
const create_banner_controller_1 = require("../controllers/bannerControllers/create.banner.controller");
const get_banners_controller_1 = require("../controllers/bannerControllers/get.banners.controller");
const create_banner_useCase_1 = require("../../../application/useCases/banner/create.banner.useCase");
const get_banners_useCase_1 = require("../../../application/useCases/banner/get.banners.useCase");
// import { upload } from "../middlewares/multer.middleware"
const router = (0, express_1.Router)();
const bannerRepository = new prisma_banner_repository_1.PrismaBannerRepository();
const cloudinaryService = new cloudinaryUploadService_1.CloudinaryUploadService();
//POST
const createBannerUseCase = new create_banner_useCase_1.CreateBannerUseCase(bannerRepository, cloudinaryService);
const createBannerController = new create_banner_controller_1.CreateBannerController(createBannerUseCase);
//GET
const getBannerUseCase = new get_banners_useCase_1.GetBannersUseCase(bannerRepository);
const getBannersController = new get_banners_controller_1.GetBannersController(getBannerUseCase);
router.post("/banner", (req, res) => {
    createBannerController.handle(req, res);
});
router.get("/banners", (req, res) => {
    getBannersController.handle(req, res);
});
exports.default = router;
