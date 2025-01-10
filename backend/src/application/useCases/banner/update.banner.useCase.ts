import { NotFoundError } from "../../../shared/errors/notFound.error";
import { getCloudinaryPublicId } from "../../../utils/get.cloudinaryPublicId";
import { IFileUpload } from "../../../Domain/services/fileUpload.service.interface";
import { IBannerRespository } from "../../../Domain/Entities/banner/banner.repository";

export type IUpdateBannerInputDTO = {
  desk_banner_1: string | Buffer | undefined;
  desk_banner_2: string | Buffer | undefined;
  desk_banner_3: string | Buffer | undefined;
  mob_banner_1: string | Buffer | undefined;
  mob_banner_2: string | Buffer | undefined;
  mob_banner_3: string | Buffer | undefined;
};
export class UpdateBannerUseCase {
  constructor(private bannerRepository: IBannerRespository, private fileUploadService: IFileUpload) {}

  async execute(data: IUpdateBannerInputDTO) {
    const { desk_banner_1, desk_banner_2, desk_banner_3, mob_banner_1, mob_banner_2, mob_banner_3 } = data;
    try {
      const existingBanners = await this.bannerRepository.getFirst();
      if (!existingBanners) throw new NotFoundError("Não há nenhum banner ainda.");

      existingBanners.update({
        desk_banner_1: await this.handleFileUpload(desk_banner_1, existingBanners.props.desk_banner_1),
        desk_banner_2: await this.handleFileUpload(desk_banner_2, existingBanners.props.desk_banner_2),
        desk_banner_3: await this.handleFileUpload(desk_banner_3, existingBanners.props.desk_banner_3),
        mob_banner_1: await this.handleFileUpload(mob_banner_1, existingBanners.props.mob_banner_1),
        mob_banner_2: await this.handleFileUpload(mob_banner_2, existingBanners.props.mob_banner_2),
        mob_banner_3: await this.handleFileUpload(mob_banner_3, existingBanners.props.mob_banner_3),
      });

      await this.bannerRepository.update(existingBanners.props.id!, existingBanners.props);
    } catch (error) {
      console.log("UpdateBannerUseCase ~ execute ~ error", error);
      throw error;
    }
  }
  async handleFileUpload(newFile: string | Buffer | undefined, existingFile: string | undefined): Promise<string | undefined> {
    if (newFile) {
      const publicID = getCloudinaryPublicId(newFile as string);
      if (publicID) {
        await this.fileUploadService.delete(publicID);
        const newUpdatedFile = await this.fileUploadService.upload(newFile, "lotaria_nacional/banners");
        return newUpdatedFile;
      }
    }
    return existingFile;
  }
}
