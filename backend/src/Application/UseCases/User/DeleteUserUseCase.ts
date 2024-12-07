import { NotFoundError } from "../../../Shared/Errors/NotFoundError"
import { IUserRepository } from "../../../Domain/Entities/User/IUserRepository"
import { IFileUpload } from "../../../Domain/Services/IFileUpload"
import { getCloudinaryPublicId } from "../../../Utils/GetCloudinaryPublicId"

export class DeleteUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private fileUploader: IFileUpload
  ) {}

  async execute(id: string) {
    const user = await this.userRepository.getById(id)
    if (!user) throw new NotFoundError("Usuário não encontrado.")

    if (user.profilePic && typeof user.profilePic === "string") {
      const publicId = getCloudinaryPublicId(user.profilePic)
      if (publicId) {
        await this.fileUploader.delete(publicId)
      }
    }

    await this.userRepository.delete(id)
  }
}
