"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const user_1 = require("../../enterprise/entities/user");
class CreateUserUseCase {
    userRespository;
    hashService;
    constructor(userRespository, hashService) {
        this.userRespository = userRespository;
        this.hashService = hashService;
    }
    async execute(data) {
        // let image: string | undefined;
        // if (data.profilePic) {
        //   const fileImage = await this.fileUpload.upload(data.profilePic, "lotaria_nacional/users", "image");
        //   image = fileImage;
        // }
        const hashedPassword = await this.hashService.hash(data.password);
        const newUser = user_1.User.create({
            ...data,
            password: hashedPassword,
        });
        await this.userRespository.create(newUser);
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
//# sourceMappingURL=create-user.useCase.js.map