import { NotFoundError } from "../../../../core/errors/common/not-found.error";
import { IUserRepository } from "../interfaces/user.repository";
import { EditUserDTO } from "../../presentation/validations/edit-user.schema";
import { IFileUpload } from "../../../../core/contracts/file-upload.interface";

export class UpdateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
  ) {}

  async execute(data: EditUserDTO) {
    const user = await this.userRepository.getById(data.id);

    if (!user) {
      throw new NotFoundError("Usuário solicitado não existe.");
    }

    // let profileImage = user.profilePic;

    // if (data.profilePic) {
    //   if (user.profilePic && typeof user.profilePic === "string") {
    //     const publicId = getCloudinaryPublicId(user.profilePic);
    //     if (publicId) {
    //       await this.fileUploader.delete(publicId, "image");
    //     }
    //   }
    //   profileImage = await this.fileUploader.upload(data.profilePic, "lotaria_nacional/users", "image");
    // }

    user.update({ ...data });

    const updatedUser = await this.userRepository.save(user);

    return updatedUser;
  }
}
