import { User } from "../../enterprise/entities/user";
import { IUserRepository } from "../interfaces/user.repository";
import { CreateUserDTO } from "../../presentation/validations/create-user.schema";
import { IHashService } from "../../../../core/contracts/hash.interface";

export class CreateUserUseCase {
  constructor(private userRespository: IUserRepository, private hashService: IHashService) {}

  async execute(data: CreateUserDTO): Promise<void> {
    // let image: string | undefined;

    // if (data.profilePic) {
    //   const fileImage = await this.fileUpload.upload(data.profilePic, "lotaria_nacional/users", "image");
    //   image = fileImage;
    // }

    const hashedPassword = await this.hashService.hash(data.password);

    const newUser = User.create({
      ...data,
      password: hashedPassword,
    });

    await this.userRespository.create(newUser);
  }
}
