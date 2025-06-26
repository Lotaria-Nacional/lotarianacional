import { IFileUpload } from "../../../../core/interfaces/file-upload.interface";
import { NotFoundError } from "../../../../core/errors/notFound.error";
import { getCloudinaryPublicId } from "../../../../core/utils/get-cloudinary-public-id";
import { IUserRepository } from "../interfaces/user.repository";


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
