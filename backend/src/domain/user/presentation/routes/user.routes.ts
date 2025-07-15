import { Router } from "express";
import { userRepository } from "../../../../main/container/repositories";
import { makeUserController } from "../factories/make-user-contoller";
import { expressAdapterController } from "../../../../core/adapters/express-adapter-controller";
import { upload } from "../../../../core/middlewares/multer.middleware";
import { BcryptHashService } from "../../../../core/services/hash/bcrypt-hash-service";

const userRouter = Router();

const bcryptHasService = new BcryptHashService();

const { createUser, fetchManyUsers, getUserById, removeUser, updateUser } = makeUserController(userRepository, bcryptHasService);

userRouter.post("/", upload.single("image"), expressAdapterController(createUser));
userRouter.get("/", expressAdapterController(fetchManyUsers));
userRouter.get("/:id", expressAdapterController(getUserById));
userRouter.put("/:id", upload.single("image"), expressAdapterController(updateUser));
userRouter.delete("/:id", expressAdapterController(removeUser));

export default userRouter;
