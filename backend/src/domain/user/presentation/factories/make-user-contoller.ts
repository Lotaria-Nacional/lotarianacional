import { CreateUserController } from "../controllers/create-user.controller";
import { DeleteUserController } from "../controllers/delete-user.controller";
import { UpdateUserController } from "../controllers/update-user.controller";
import { IUserRepository } from "../../application/interfaces/user.repository";
import { GetUserByIdController } from "../controllers/get-user-by-id.controller";
import { DeleteUserUseCase } from "../../application/use-cases/delete-user.useCase";
import { CreateUserUseCase } from "../../application/use-cases/create-user.useCase";
import { UpdateUserUseCase } from "../../application/use-cases/update-user.useCase";
import { FetchManyUsersController } from "../controllers/fetch-many-users.controllers";
import { GetUserByIdUseCase } from "../../application/use-cases/get-user-by-id.useCase";
import { FetchManyUsersUseCase } from "../../application/use-cases/fetch-many-users.useCase";
import { IFileUpload } from "../../../../core/contracts/file-upload.interface";
import { IHashService } from "../../../../core/contracts/hash.interface";

export function makeUserController(repository:IUserRepository, fileUpload: IFileUpload, hashService: IHashService){
    const createUser = new CreateUserController(new CreateUserUseCase(repository, fileUpload, hashService))
    const updateUser = new UpdateUserController(new UpdateUserUseCase(repository, fileUpload))
    const removeUser = new DeleteUserController(new DeleteUserUseCase(repository, fileUpload))
    const fetchManyUsers = new FetchManyUsersController(new FetchManyUsersUseCase(repository))
    const getUserById = new GetUserByIdController(new GetUserByIdUseCase(repository))

    return {
        createUser,
        updateUser,
        removeUser,
        fetchManyUsers,
        getUserById
    }
}