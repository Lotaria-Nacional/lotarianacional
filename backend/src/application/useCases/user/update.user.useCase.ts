import { IFileUpload } from "../../../Domain/services/fileUpload.service.interface";
import { getCloudinaryPublicId } from "../../../utils/get.cloudinaryPublicId";
import { IUserRepository } from "../../../Domain/Entities/User/user.repository";

export type UpdateUserInputDTO = {
  email?: string;
  password?: string;
  lastName?: string;
  role?: string;
  firstName?: string;
  profilePic?: string | Buffer;
};

export class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository, private fileUploader: IFileUpload) {}

  async execute(id: string, data: UpdateUserInputDTO) {
    const user = await this.userRepository.getById(id);
    if (!user) {
      throw new Error("Usuário solicitado não existe.");
    }
    let profileImage: string | undefined;

    if (data.profilePic) {
      if (user.profilePic && typeof user.profilePic === "string") {
        const publicId = getCloudinaryPublicId(user.profilePic);
        if (publicId) {
          await this.fileUploader.delete(publicId, "image");
        }
      }
      profileImage = await this.fileUploader.upload(data.profilePic, "lotaria_nacional/users", "image");
    }

    const updatedUser = await this.userRepository.update(id, {
      ...data,
      profilePic: profileImage,
    });
    return updatedUser;
  }
}
