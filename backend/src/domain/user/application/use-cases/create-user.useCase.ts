import { User } from "../../enterprise/entities/user";
import { IUserRepository } from "../interfaces/user.repository";
import { IHashService } from "@/core/contracts/hash.interface";
import { IFileUpload } from "@/core/contracts/file-upload.interface";
import { CreateUserDTO } from "../../presentation/validations/create-user.schema";

export class CreateUserUseCase {
  constructor(private userRespository: IUserRepository, private fileUpload: IFileUpload, private hashService: IHashService) {}

  async execute(data: CreateUserDTO): Promise<void> {
    let image: string | undefined;

    if (data.profilePic) {
      const fileImage = await this.fileUpload.upload(data.profilePic, "lotaria_nacional/users", "image");
      image = fileImage;
    }

    const hashedPassword = await this.hashService.hash(data.password);

    const newUser = User.create({
      ...data,
      profilePic: image,
      password: hashedPassword,
    });

    await this.userRespository.create(newUser);
  }
}
