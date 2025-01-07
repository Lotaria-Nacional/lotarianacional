import { Banner } from "../../../Domain/Entities/banner/banner";
import { IFileUpload } from "../../../Domain/services/fileUpload.service.interface";
import { IBannerRespository } from "../../../Domain/Entities/banner/banner.repository";

export type CreateMobileBannerInputDTO = {
  mob_banner_1: string | Buffer;
  mob_banner_2: string | Buffer;
  mob_banner_3: string | Buffer;
};

export class CreateMobileBannerUseCase {
  constructor(private bannerRepository: IBannerRespository, private fileUploadService: IFileUpload) {}

  async execute(data: CreateMobileBannerInputDTO) {
    try {


      const { mb1, mb2, mb3 } = await this.uploadFileHelper(data);

      const banner = Banner.create({
        mob_banner_1: mb1,
        mob_banner_2: mb2,
        mob_banner_3: mb3,
      });

      await this.bannerRepository.saveMobile(banner);
    } catch (error) {
      console.log("CreateBannerUseCase ~ execute ~ error -->", error);
      throw error;
    }
  }

  async uploadFileHelper(data: CreateMobileBannerInputDTO) {
    const { mob_banner_1, mob_banner_2, mob_banner_3 } = data;
    console.log(data);

    try {
      const mb1 = await this.fileUploadService.upload(mob_banner_1, "lotaria_nacional/banners");
      const mb2 = await this.fileUploadService.upload(mob_banner_2, "lotaria_nacional/banners");
      const mb3 = await this.fileUploadService.upload(mob_banner_3, "lotaria_nacional/banners");
      return { mb1, mb2, mb3 };
    } catch (error) {
      console.log("CreateMobileBannerUseCase ~ uploadFileHelper ~ error -->", error);
      throw error;
    }
  }
}
