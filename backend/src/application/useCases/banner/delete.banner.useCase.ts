import { NotFoundError } from "../../../shared/errors/notFound.error";
import { getCloudinaryPublicId } from "../../../utils/get.cloudinaryPublicId";
import { IFileUpload } from "../../../Domain/services/fileUpload.service.interface";
import { IBannerRespository } from "../../../Domain/Entities/banner/banner.repository";

export class DeleteBannerUseCase {
  constructor(private bannerRepository: IBannerRespository, private fileUpload: IFileUpload) {}

  async execute(id: string) {
    try {
      const existingBanner = await this.bannerRepository.getById(id);
      if (!existingBanner) throw new NotFoundError("Banner não encontrado.");
      const publicID = getCloudinaryPublicId(existingBanner.props.image);
      if (publicID) {
        await this.fileUpload.delete(publicID);
      }
      await this.bannerRepository.delete(id);
    } catch (error) {
      console.log("DeleteBannerUseCase ~ execute ~ error", error);
      throw new Error("Erro ao deletar o banner");
    }
  }
}
