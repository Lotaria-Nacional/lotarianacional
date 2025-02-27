import { Banner } from "../../../Domain/Entities/banner/banner";
import { IBannerRespository } from "../../../Domain/Entities/banner/banner.repository";
import { IFileUpload } from "../../../Domain/services/fileUpload.service.interface";

export type ICreateBannerInputDTO = {
  image: Buffer;
  device: string;
};

export class CreateBannerUseCase {
  constructor(private bannerRepo: IBannerRespository, private fileService: IFileUpload) {}

  async execute(data: ICreateBannerInputDTO) {
    const { device, image } = data;
    try {
      const banners = await this.bannerRepo.getAll();
      if (banners.length >= 6) {
        throw new Error("Atingiu o limite de banners.");
      }
      const imageURL = await this.fileService.upload(image, "lotaria_nacional/banners", "image");
      const banner = Banner.create({
        device,
        image: imageURL,
      });
      await this.bannerRepo.save(banner);
    } catch (error) {
      console.log("CreateBannerUseCase ~ execute ~ error", error);
      throw new Error("Erro ao salvar o banner.");
    }
  }
}
