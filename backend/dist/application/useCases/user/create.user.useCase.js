"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const User_1 = require("../../../Domain/Entities/User/User");
class CreateUserUseCase {
    constructor(userRespository, fileUpload, hashService) {
        this.userRespository = userRespository;
        this.fileUpload = fileUpload;
        this.hashService = hashService;
    }
    async execute(user) {
        let image;
        if (user.profilePic) {
            const fileImage = await this.fileUpload.upload(user.profilePic, "lotaria_nacional/users");
            image = fileImage;
        }
        const hashedPassword = await this.hashService.hash(user.password);
        const newUser = User_1.User.create({
            ...user,
            profilePic: image,
            password: hashedPassword,
        });
        await this.userRespository.save(newUser);
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
