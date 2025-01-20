"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const create_news_useCase_1 = require("../../../application/useCases/news/create.news.useCase");
const get_news_useCase_1 = require("../../../application/useCases/news/get.news.useCase");
const get_newsById_useCase_1 = require("../../../application/useCases/news/get.newsById.useCase");
const update_news_useCase_1 = require("../../../application/useCases/news/update.news.useCase");
const delete_news_useCase_1 = require("../../../application/useCases/news/delete.news.useCase");
const CloudinaryUploadService_1 = require("../../Services/ImageUpload/CloudinaryUploadService");
const multer_middleware_1 = require("../middlewares/multer.middleware");
const prisma_news_repository_1 = require("../../repositories/prisma/prisma.news.repository");
const create_news_controller_1 = require("../controllers/newsControllers/create.news.controller");
const delete_news_controller_1 = require("../controllers/newsControllers/delete.news.controller");
const get_news_controller_1 = require("../controllers/newsControllers/get.news.controller");
const get_newsById_controller_1 = require("../controllers/newsControllers/get.newsById.controller");
const update_news_controller_1 = require("../controllers/newsControllers/update.news.controller");
const router = (0, express_1.Router)();
const prismaNewsRepository = new prisma_news_repository_1.PrismaNewsRespository();
const cloudinaryUploadService = new CloudinaryUploadService_1.CloudinaryUploadService();
//CREATE NEWS
const createNewsUseCase = new create_news_useCase_1.CreateNewsUseCase(prismaNewsRepository, cloudinaryUploadService);
const createNewsController = new create_news_controller_1.CreateNewsController(createNewsUseCase);
//UPDATE NEWS
const updateNewsUseCase = new update_news_useCase_1.UpdateNewsUseCase(prismaNewsRepository, cloudinaryUploadService);
const updateNewsController = new update_news_controller_1.UpdateNewsController(updateNewsUseCase);
//GET NEWS
const getNewsUseCase = new get_news_useCase_1.GetNewsUseCase(prismaNewsRepository);
const getNewsController = new get_news_controller_1.GetNewsController(getNewsUseCase);
//GET NEWS BY ID
const newsByIdUseCase = new get_newsById_useCase_1.GetNewsByIdUseCase(prismaNewsRepository);
const getNewsByIdController = new get_newsById_controller_1.GetNewsByIdController(newsByIdUseCase);
//DELETE NEWS
const deleteNewsUseCase = new delete_news_useCase_1.DeleteNewsUseCase(prismaNewsRepository, cloudinaryUploadService);
const deleteNewsController = new delete_news_controller_1.DeleteNewsController(deleteNewsUseCase);
router.post("/news", multer_middleware_1.upload.single("image"), (req, res) => {
    createNewsController.handle(req, res);
});
router.get("/news", (req, res) => {
    getNewsController.handle(req, res);
});
router.get("/news/:id", (req, res) => {
    getNewsByIdController.handle(req, res);
});
router.put("/news/:id", multer_middleware_1.upload.single("image"), (req, res) => {
    updateNewsController.handle(req, res);
});
router.delete("/news/:id", (req, res) => {
    deleteNewsController.handle(req, res);
});
exports.default = router;
