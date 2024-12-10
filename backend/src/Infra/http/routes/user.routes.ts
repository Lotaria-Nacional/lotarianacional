import { Request, Response, Router } from "express"
import { upload } from "../middlewares/multer.middleware"

import { PrismaUserRespository } from "../../repositories/prisma/prisma.user.repository"
import { GetUsersUseCase } from "../../../application/useCases/user/get.users.useCase"
import { UpdateUserUseCase } from "../../../application/useCases/user/update.user.useCase"
import { DeleteUserUseCase } from "../../../application/useCases/user/delete.user.useCase"
import { CreateUserUseCase } from "../../../application/useCases/user/create.user.useCase"
import { GetUserByIdUseCase } from "../../../application/useCases/user/get.userById.useCase"

import { CloudinaryUploadService } from "../../services/imageUpload/cloudinaryUploadService"
import { GetUsersController } from "../controllers/userControllers/get.users.controllers"
import { UpdateUserController } from "../controllers/userControllers/update.user.controller"
import { CreateUserController } from "../controllers/userControllers/create.user.controller"
import { DeleteUserController } from "../controllers/userControllers/delete.user.controller"
import { GetUserByIdController } from "../controllers/userControllers/get.userById.controller"
import { BcryptHashService } from "../../services/hash/bcryptHashService"

const router = Router()

const prismaUserRepository = new PrismaUserRespository()
const cloudinaryUploadService = new CloudinaryUploadService()
const bcryptHasService = new BcryptHashService()

//CREATE USER
const createUserUseCase = new CreateUserUseCase(
  prismaUserRepository,
  cloudinaryUploadService,
  bcryptHasService
)
const createUserController = new CreateUserController(createUserUseCase)

//GET USERS
const getUsersUseCase = new GetUsersUseCase(prismaUserRepository)
const getUsersController = new GetUsersController(getUsersUseCase)

//GET USER BY ID
const getUserByIdUseCase = new GetUserByIdUseCase(prismaUserRepository)
const getUserByIdController = new GetUserByIdController(getUserByIdUseCase)

//UPDATE USER
const updateUserUseCase = new UpdateUserUseCase(
  prismaUserRepository,
  cloudinaryUploadService
)
const updateUserController = new UpdateUserController(updateUserUseCase)

//DELETE USER
const deleteUserUseCase = new DeleteUserUseCase(
  prismaUserRepository,
  cloudinaryUploadService
)
const deleteUserController = new DeleteUserController(deleteUserUseCase)

router.post("/user", upload.single("image"), (req: Request, res: Response) => {
  createUserController.handle(req, res)
})
router.get("/users", (req: Request, res: Response) => {
  getUsersController.handle(req, res)
})
router.get("/user/:id", (req: Request, res: Response) => {
  getUserByIdController.handle(req, res)
})

router.put(
  "/user/:id",
  upload.single("image"),
  (req: Request, res: Response) => {
    updateUserController.handle(req, res)
  }
)

router.delete("/user/:id", (req: Request<{ id: string }>, res: Response) => {
  deleteUserController.handle(req, res)
})

export default router
