import { NotFoundError } from "../../../shared/errors/notFound.error";
import { getCloudinaryPublicId } from "../../../utils/get.cloudinaryPublicId";
import { IFileUpload } from "../../../Domain/services/fileUpload.service.interface";
import { IBannerRespository } from "../../../Domain/Entities/banner/banner.repository";

type UpdateBannerInputDTO = {
  id: string;
  image: Buffer;
};

export class UpdateBannerUseCase {
  constructor(private bannerRepo: IBannerRespository, private fileService: IFileUpload) {}

  async execute(data: UpdateBannerInputDTO) {
    const { id, image } = data;

    try {
      const existingBanner = await this.bannerRepo.getById(id);
      if (!existingBanner) {
        throw new NotFoundError("Banner não encontrado.");
      }

      const newImage = await this.handleImage(existingBanner.props.image, image);
      existingBanner.update({ image: newImage });
      await this.bannerRepo.update(id, existingBanner);
    } catch (error) {
      console.log("UpdateBannerUseCase ~ execute ~ error", error);
      throw new Error("Erro ao atualizar o banner");
    }
  }

  private async handleImage(existingBanner: string, newImage: Buffer) {
    const publicID = getCloudinaryPublicId(existingBanner);

    if (publicID) {
      try {
        await this.fileService.delete(publicID, "image");
        const newImg = await this.fileService.upload(newImage, "lotaria_nacional/banners", "image");
        return newImg;
      } catch (error) {
        console.log("UpdateBannerUseCase ~ execute ~ error", error);
        throw new Error("Erro eliminar imagem no cloudinary");
      }
    }
  }
}
