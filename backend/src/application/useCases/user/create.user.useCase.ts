import { User } from "../../../domain/entities/user/user"
import { IFileUpload } from "../../../domain/services/fileUpload.service.interface"
import { IHashService } from "../../../domain/services/hash.service.interface"
import { IUserRepository } from "../../../domain/entities/user/user.repository"

export type CreateUserInputDTO = {
  email: string
  lastName: string
  password: string
  firstName: string
  profilePic?: string | Buffer
}

export class CreateUserUseCase {
  constructor(
    private userRespository: IUserRepository,
    private fileUpload: IFileUpload,
    private hashService: IHashService
  ) {}

  async execute(user: CreateUserInputDTO): Promise<void> {
    let image: string | undefined
    if (user.profilePic) {
      const fileImage = await this.fileUpload.upload(
        user.profilePic,
        "lotaria_nacional/users"
      )
      image = fileImage
    }
    const hashedPassword = await this.hashService.hash(user.password)

    const newUser = User.create({
      ...user,
      profilePic: image,
      password: hashedPassword,
    })
    await this.userRespository.save(newUser)
  }
}
