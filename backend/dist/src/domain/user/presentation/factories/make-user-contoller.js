"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUserController = makeUserController;
const create_user_controller_1 = require("../controllers/create-user.controller");
const delete_user_controller_1 = require("../controllers/delete-user.controller");
const update_user_controller_1 = require("../controllers/update-user.controller");
const get_user_by_id_controller_1 = require("../controllers/get-user-by-id.controller");
const delete_user_useCase_1 = require("../../application/use-cases/delete-user.useCase");
const create_user_useCase_1 = require("../../application/use-cases/create-user.useCase");
const update_user_useCase_1 = require("../../application/use-cases/update-user.useCase");
const fetch_many_users_controllers_1 = require("../controllers/fetch-many-users.controllers");
const get_user_by_id_useCase_1 = require("../../application/use-cases/get-user-by-id.useCase");
const fetch_many_users_useCase_1 = require("../../application/use-cases/fetch-many-users.useCase");
function makeUserController(repository, hashService) {
    const createUser = new create_user_controller_1.CreateUserController(new create_user_useCase_1.CreateUserUseCase(repository, hashService));
    const updateUser = new update_user_controller_1.UpdateUserController(new update_user_useCase_1.UpdateUserUseCase(repository));
    const removeUser = new delete_user_controller_1.DeleteUserController(new delete_user_useCase_1.DeleteUserUseCase(repository));
    const fetchManyUsers = new fetch_many_users_controllers_1.FetchManyUsersController(new fetch_many_users_useCase_1.FetchManyUsersUseCase(repository));
    const getUserById = new get_user_by_id_controller_1.GetUserByIdController(new get_user_by_id_useCase_1.GetUserByIdUseCase(repository));
    return {
        createUser,
        updateUser,
        removeUser,
        fetchManyUsers,
        getUserById
    };
}
//# sourceMappingURL=make-user-contoller.js.map