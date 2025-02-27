import { NotFoundError } from "../../../shared/errors/notFound.error"
import { IUserRepository } from "../../../Domain/Entities/User/user.repository"
import { IFileUpload } from "../../../Domain/services/fileUpload.service.interface"
import { getCloudinaryPublicId } from "../../../utils/get.cloudinaryPublicId"

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
        await this.fileUploader.delete(publicId, "image");
      }
    }

    await this.userRepository.delete(id)
  }
}
