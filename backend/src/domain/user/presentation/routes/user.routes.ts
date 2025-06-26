import { Router } from "express"
import { makeUserController } from "../factories/make-user-contoller"
import { upload } from "../../../../core/middlewares/multer.middleware"
import { BcryptHashService } from "../../../../core/services/hash/bcrypt-hash-service"
import { expressAdapterController } from "../../../../core/adapters/express-adapter-controller"
import { PrismaUserRespository } from "../../infrastructure/repositories/prisma/prisma.user.repository"
import { CloudinaryUploadService } from "../../../../core/services/file-upload/cloudinary-upload-service"

const userRouter = Router()

const userRepository = new PrismaUserRespository()
const cloudinaryService = new CloudinaryUploadService()
const bcryptHasService = new BcryptHashService()

const { createUser,fetchManyUsers,getUserById, removeUser,updateUser } = makeUserController(userRepository, cloudinaryService, bcryptHasService)

userRouter.post("/user", upload.single("image"), expressAdapterController(createUser))
userRouter.get("/users", expressAdapterController(fetchManyUsers))
userRouter.get("/user/:id", expressAdapterController(getUserById))
userRouter.put("/user/:id",upload.single("image"),expressAdapterController(updateUser))
userRouter.delete("/user/:id", expressAdapterController(removeUser))

export default userRouter
