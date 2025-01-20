"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_middleware_1 = require("../middlewares/multer.middleware");
const prisma_user_repository_1 = require("../../repositories/prisma/prisma.user.repository");
const get_users_useCase_1 = require("../../../application/useCases/user/get.users.useCase");
const update_user_useCase_1 = require("../../../application/useCases/user/update.user.useCase");
const delete_user_useCase_1 = require("../../../application/useCases/user/delete.user.useCase");
const create_user_useCase_1 = require("../../../application/useCases/user/create.user.useCase");
const get_userById_useCase_1 = require("../../../application/useCases/user/get.userById.useCase");
const CloudinaryUploadService_1 = require("../../Services/ImageUpload/CloudinaryUploadService");
const get_users_controllers_1 = require("../controllers/userControllers/get.users.controllers");
const update_user_controller_1 = require("../controllers/userControllers/update.user.controller");
const create_user_controller_1 = require("../controllers/userControllers/create.user.controller");
const delete_user_controller_1 = require("../controllers/userControllers/delete.user.controller");
const get_userById_controller_1 = require("../controllers/userControllers/get.userById.controller");
const BcryptHashService_1 = require("../../Services/Hash/BcryptHashService");
const router = (0, express_1.Router)();
const prismaUserRepository = new prisma_user_repository_1.PrismaUserRespository();
const cloudinaryUploadService = new CloudinaryUploadService_1.CloudinaryUploadService();
const bcryptHasService = new BcryptHashService_1.BcryptHashService();
//CREATE USER
const createUserUseCase = new create_user_useCase_1.CreateUserUseCase(prismaUserRepository, cloudinaryUploadService, bcryptHasService);
const createUserController = new create_user_controller_1.CreateUserController(createUserUseCase);
//GET USERS
const getUsersUseCase = new get_users_useCase_1.GetUsersUseCase(prismaUserRepository);
const getUsersController = new get_users_controllers_1.GetUsersController(getUsersUseCase);
//GET USER BY ID
const getUserByIdUseCase = new get_userById_useCase_1.GetUserByIdUseCase(prismaUserRepository);
const getUserByIdController = new get_userById_controller_1.GetUserByIdController(getUserByIdUseCase);
//UPDATE USER
const updateUserUseCase = new update_user_useCase_1.UpdateUserUseCase(prismaUserRepository, cloudinaryUploadService);
const updateUserController = new update_user_controller_1.UpdateUserController(updateUserUseCase);
//DELETE USER
const deleteUserUseCase = new delete_user_useCase_1.DeleteUserUseCase(prismaUserRepository, cloudinaryUploadService);
const deleteUserController = new delete_user_controller_1.DeleteUserController(deleteUserUseCase);
router.post("/user", multer_middleware_1.upload.single("image"), (req, res) => {
    createUserController.handle(req, res);
});
router.get("/users", (req, res) => {
    getUsersController.handle(req, res);
});
router.get("/user/:id", (req, res) => {
    getUserByIdController.handle(req, res);
});
router.put("/user/:id", multer_middleware_1.upload.single("image"), (req, res) => {
    updateUserController.handle(req, res);
});
router.delete("/user/:id", (req, res) => {
    deleteUserController.handle(req, res);
});
exports.default = router;
