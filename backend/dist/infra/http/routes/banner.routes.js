"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_middleware_1 = require("../middlewares/multer.middleware");
const create_banner_useCase_1 = require("../../../application/useCases/banner/create.banner.useCase");
const prisma_banner_repository_1 = require("../../repositories/prisma/prisma.banner.repository");
const CloudinaryUploadService_1 = require("../../Services/ImageUpload/CloudinaryUploadService");
const create_desktop_banner_controller_1 = require("../controllers/bannerControllers/create.desktop.banner.controller");
const get_banners_useCase_1 = require("../../../application/useCases/banner/get.banners.useCase");
const getAll_banners_controller_1 = require("../controllers/bannerControllers/getAll.banners.controller");
const update_banner_controller_1 = require("../controllers/bannerControllers/update.banner.controller");
const update_banner_useCase_1 = require("../../../application/useCases/banner/update.banner.useCase");
const delete_banner_useCase_1 = require("../../../application/useCases/banner/delete.banner.useCase");
const delete_banner_controller_1 = require("../controllers/bannerControllers/delete.banner.controller");
const router = (0, express_1.Router)();
const prismaBannerRepository = new prisma_banner_repository_1.PrismaBannerRepository();
const cloudinaryService = new CloudinaryUploadService_1.CloudinaryUploadService();
const createBannerUseCase = new create_banner_useCase_1.CreateBannerUseCase(prismaBannerRepository, cloudinaryService);
const createBannerController = new create_desktop_banner_controller_1.CreateBannerController(createBannerUseCase);
const getAllBannersUseCase = new get_banners_useCase_1.GetAllBannersUseCase(prismaBannerRepository);
const getAllBannersController = new getAll_banners_controller_1.GetAllBannersController(getAllBannersUseCase);
const updateBannerUseCase = new update_banner_useCase_1.UpdateBannerUseCase(prismaBannerRepository, cloudinaryService);
const updateBannerController = new update_banner_controller_1.UpdateBannerController(updateBannerUseCase);
const deleteBannerUseCase = new delete_banner_useCase_1.DeleteBannerUseCase(prismaBannerRepository, cloudinaryService);
const deleteBannerController = new delete_banner_controller_1.DeleteBannerController(deleteBannerUseCase);
router.post("/banner", multer_middleware_1.upload.single("banner"), (req, res) => {
    createBannerController.handle(req, res);
});
router.get("/banner", (req, res) => {
    getAllBannersController.handle(req, res);
});
router.put("/banner/:id", multer_middleware_1.upload.single("banner"), (req, res) => {
    updateBannerController.handle(req, res);
});
router.delete("/banner/:id", (req, res) => {
    deleteBannerController.handle(req, res);
});
exports.default = router;
