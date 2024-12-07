import { Request, Response, Router } from "express"
import { upload } from "../Middlewares/MulterMiddleware"

import { PrismaUserRespository } from "../../Repositories/prisma/PrismaUserRepository"
import { GetUsersUseCase } from "../../../Application/UseCases/User/GetUsersUseCase"
import { UpdateUserUseCase } from "../../../Application/UseCases/User/UpdateUserUseCase"
import { DeleteUserUseCase } from "../../../Application/UseCases/User/DeleteUserUseCase"
import { CreateUserUseCase } from "../../../Application/UseCases/User/CreateUserUseCase"
import { GetUserByIdUseCase } from "../../../Application/UseCases/User/GetUserByIdUseCase"

import { CloudinaryUploadService } from "../../Services/ImageUpload/CloudinaryUploadService"
import { GetUsersController } from "../Controllers/UserControllers/GetUsersControllers"
import { UpdateUserController } from "../Controllers/UserControllers/updateUserController"
import { CreateUserController } from "../Controllers/UserControllers/CreateUserController"
import { DeleteUserController } from "../Controllers/UserControllers/DeleteUserController"
import { GetUserByIdController } from "../Controllers/UserControllers/GetUserByIdController"
import { BcryptHashService } from "../../Services/Hash/BcryptHashService"

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

router.post(
  "/user",
  upload.single("profilePic"),
  (req: Request, res: Response) => {
    createUserController.handle(req, res)
  }
)
router.get("/users", (req: Request, res: Response) => {
  getUsersController.handle(req, res)
})
router.get("/user/:id", (req: Request, res: Response) => {
  getUserByIdController.handle(req, res)
})

router.put(
  "/user/:id",
  upload.single("profilePic"),
  (req: Request, res: Response) => {
    updateUserController.handle(req, res)
  }
)

router.delete("/user/:id", (req: Request<{ id: string }>, res: Response) => {
  deleteUserController.handle(req, res)
})

export default router
