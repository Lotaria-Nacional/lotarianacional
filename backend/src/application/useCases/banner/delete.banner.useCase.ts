import { NotFoundError } from "../../../shared/errors/notFound.error";
import { getCloudinaryPublicId } from "../../../utils/get.cloudinaryPublicId";
import { IFileUpload } from "../../../Domain/services/fileUpload.service.interface";
import { IBannerRespository } from "../../../Domain/Entities/banner/banner.repository";

type IDeleteBannerInputDTO = {
  devicePosition: string;
};

export class DeleteBannerUseCase {
  constructor(private bannerRepository: IBannerRespository, private fileUploadService: IFileUpload) {}

  async execute(devicePosition: string) {
    const existingBanner = await this.bannerRepository.getFirst();
    if (!existingBanner) throw new NotFoundError("Não há banners ainda.");
    console.log("DeleteBannerUseCase ~ execute ~ existingBanner", existingBanner);

    console.log("DeleteBannerUseCase ~ execute ~ devicePosition", devicePosition);

    const bannerKeyMap: Record<string, keyof typeof existingBanner.props> = {
      desk_1: "desk_banner_1",
      desk_2: "desk_banner_2",
      desk_3: "desk_banner_3",
      mob_1: "mob_banner_1",
      mob_2: "mob_banner_2",
      mob_3: "mob_banner_3",
    };

    const bannerKey = bannerKeyMap[devicePosition];
    console.log("DeleteBannerUseCase ~ execute ~ bannerKey", bannerKey);
    const bannerUrl = existingBanner.props[bannerKey];
    console.log("DeleteBannerUseCase ~ execute ~ bannerUrl", bannerUrl);

    if (bannerUrl) {
      const publicID = getCloudinaryPublicId(bannerUrl);
      if (publicID) {
        console.log("DeleteBannerUseCase ~ execute ~ publicID", publicID);
        try {
          await this.fileUploadService.delete(publicID);
          console.log("DeleteBannerUseCase ~ execute ~ banner deletedo com sucesso");
          existingBanner.update({ [bannerKey]: "" });
          await this.bannerRepository.update(existingBanner.props.id!, existingBanner.props);
        } catch (error) {
          console.log("DeleteBannerUseCase ~ execute ~ error", error);
          throw error;
        }
      }
    }
  }
}
