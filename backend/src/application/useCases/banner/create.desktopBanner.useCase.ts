import { Banner } from "../../../Domain/Entities/banner/banner";
import { IFileUpload } from "../../../Domain/services/fileUpload.service.interface";
import { IBannerRespository } from "../../../Domain/Entities/banner/banner.repository";

export type CreateDesktopBannerInputDTO = {
  desk_banner_1: string | Buffer;
  desk_banner_2: string | Buffer;
  desk_banner_3: string | Buffer;
};

export class CreateDesktopBannerUseCase {
  constructor(private bannerRepository: IBannerRespository, private fileUploadService: IFileUpload) {}

  async execute(data: CreateDesktopBannerInputDTO) {
    try {
      const { db1, db2, db3 } = await this.uploadFileHelper(data);

      const banner = Banner.create({
        desk_banner_1: db1,
        desk_banner_2: db2,
        desk_banner_3: db3,
      });

      await this.bannerRepository.saveDesktop(banner);
    } catch (error) {
      console.log("CreateBannerUseCase ~ execute ~ error -->", error);
      throw error;
    }
  }

  async uploadFileHelper(data: CreateDesktopBannerInputDTO) {
    const { desk_banner_1, desk_banner_2, desk_banner_3 } = data;
    console.log(data);

    try {
      const db1 = await this.fileUploadService.upload(desk_banner_1, "lotaria_nacional/banners");
      const db2 = await this.fileUploadService.upload(desk_banner_2, "lotaria_nacional/banners");
      const db3 = await this.fileUploadService.upload(desk_banner_3, "lotaria_nacional/banners");
      return { db1, db2, db3 };
    } catch (error) {
      console.log("CreateBannerUseCase ~ uploadFileHelper ~ error -->", error);
      throw error;
    }
  }
}
