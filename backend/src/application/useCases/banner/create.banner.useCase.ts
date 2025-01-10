import { Banner } from "../../../Domain/Entities/banner/banner";
import { getCloudinaryPublicId } from "../../../utils/get.cloudinaryPublicId";
import { IFileUpload } from "../../../Domain/services/fileUpload.service.interface";
import { IBannerRespository } from "../../../Domain/Entities/banner/banner.repository";

export type ICreateBannerInputDTO = {
  desk_banner_1: Buffer | undefined;
  desk_banner_2: Buffer | undefined;
  desk_banner_3: Buffer | undefined;
  mob_banner_1: Buffer | undefined;
  mob_banner_2: Buffer | undefined;
  mob_banner_3: Buffer | undefined;
};

export class CreateBannerUseCase {
  constructor(private bannerRepository: IBannerRespository, private fileUploadService: IFileUpload) {}

  async execute(data: ICreateBannerInputDTO) {
    try {
      const existingBanner = await this.bannerRepository.getFirst();

      console.log("CreateBannerUseCase ~ desk_banner_1 ~ existingBanner", existingBanner?.props);

      if (existingBanner) {
        const updatedData = {
          desk_banner_1: await this.updateBannerFile(existingBanner.props.desk_banner_1, data.desk_banner_1),
          desk_banner_2: await this.updateBannerFile(existingBanner.props.desk_banner_2, data.desk_banner_2),
          desk_banner_3: await this.updateBannerFile(existingBanner.props.desk_banner_3, data.desk_banner_3),
          mob_banner_1: await this.updateBannerFile(existingBanner.props.mob_banner_1, data.mob_banner_1),
          mob_banner_2: await this.updateBannerFile(existingBanner.props.mob_banner_2, data.mob_banner_2),
          mob_banner_3: await this.updateBannerFile(existingBanner.props.mob_banner_3, data.mob_banner_3),
        };

        await this.bannerRepository.update(existingBanner.props.id!, updatedData);
      } else {
        const banner = Banner.create({
          desk_banner_1: await this.handleUploadFile(data.desk_banner_1),
          desk_banner_2: await this.handleUploadFile(data.desk_banner_2),
          desk_banner_3: await this.handleUploadFile(data.desk_banner_3),
          mob_banner_1: await this.handleUploadFile(data.mob_banner_1),
          mob_banner_2: await this.handleUploadFile(data.mob_banner_2),
          mob_banner_3: await this.handleUploadFile(data.mob_banner_3),
        });

        await this.bannerRepository.save(banner);
      }
    } catch (error) {
      console.error("CreateBannerUseCase ~ execute ~ error", error);
      throw error;
    }
  }

  private async updateBannerFile(existingFileUrl: string | undefined, newFile: Buffer | undefined): Promise<string> {
    if (newFile) {
      if (existingFileUrl) {
        const publicID = getCloudinaryPublicId(existingFileUrl);
        if (publicID) {
          await this.fileUploadService.delete(publicID);
        }
      }
      return await this.handleUploadFile(newFile);
    } else {
      console.log("No file was provided " + newFile);
    }
    return existingFileUrl || "";
  }
  private async handleUploadFile(file: Buffer | undefined): Promise<string> {
    if (!file) return "";
    try {
      const uploadedFile = await this.fileUploadService.upload(file, "lotaria_nacional/banners");
      return uploadedFile;
    } catch (error) {
      console.error("CreateBannerUseCase ~ handleUploadFile ~ error", error);
      throw error;
    }
  }
}
