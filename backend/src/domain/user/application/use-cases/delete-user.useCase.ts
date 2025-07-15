import { NotFoundError } from "../../../../core/errors/common/not-found.error";
import { IUserRepository } from "../interfaces/user.repository";


export class DeleteUserUseCase {
  constructor(
    private userRepository: IUserRepository,
  ) {}

  async execute(id: string) {
    const user = await this.userRepository.getById(id)
    if (!user) throw new NotFoundError("Usuário não encontrado.")

    // if (user.profilePic && typeof user.profilePic === "string") {
    //   const publicId = getCloudinaryPublicId(user.profilePic)
    //   if (publicId) {
    //     await this.fileUploader.delete(publicId, "image");
    //   }
    // }

    await this.userRepository.delete(id)
  }
}
