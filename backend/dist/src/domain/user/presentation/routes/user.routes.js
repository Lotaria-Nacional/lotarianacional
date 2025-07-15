"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const repositories_1 = require("../../../../main/container/repositories");
const make_user_contoller_1 = require("../factories/make-user-contoller");
const express_adapter_controller_1 = require("../../../../core/adapters/express-adapter-controller");
const multer_middleware_1 = require("../../../../core/middlewares/multer.middleware");
const bcrypt_hash_service_1 = require("../../../../core/services/hash/bcrypt-hash-service");
const userRouter = (0, express_1.Router)();
const bcryptHasService = new bcrypt_hash_service_1.BcryptHashService();
const { createUser, fetchManyUsers, getUserById, removeUser, updateUser } = (0, make_user_contoller_1.makeUserController)(repositories_1.userRepository, bcryptHasService);
userRouter.post("/", multer_middleware_1.upload.single("image"), (0, express_adapter_controller_1.expressAdapterController)(createUser));
userRouter.get("/", (0, express_adapter_controller_1.expressAdapterController)(fetchManyUsers));
userRouter.get("/:id", (0, express_adapter_controller_1.expressAdapterController)(getUserById));
userRouter.put("/:id", multer_middleware_1.upload.single("image"), (0, express_adapter_controller_1.expressAdapterController)(updateUser));
userRouter.delete("/:id", (0, express_adapter_controller_1.expressAdapterController)(removeUser));
exports.default = userRouter;
//# sourceMappingURL=user.routes.js.map