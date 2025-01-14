import { Banner } from "../../../Domain/Entities/banner/banner";
import { IBannerRespository } from "../../../Domain/Entities/banner/banner.repository";

export class GetAllBannersUseCase {
  constructor(private bannerRepo: IBannerRespository) {}

  async execute() {
    try {
      const banners = await this.bannerRepo.getAll();
      return banners.map((banner) => banner.toJSON());
    } catch (error) {
      throw new Error("Erro ao obter os banners");
    }
  }
}
