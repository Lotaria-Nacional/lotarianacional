import { Banner, BannerProps } from "../../../Domain/Entities/banner/banner";
import { IBannerRespository } from "../../../Domain/Entities/banner/banner.repository";

export class GetBannersUseCase {
  constructor(private bannerRepository: IBannerRespository) {}

  async execute():Promise<BannerProps[]> {
    try {
      const banners = await this.bannerRepository.getAll();
      return banners.map(
        (banner) =>
          Banner.create({
            id: banner.props.id,
            desk_banner_1: banner.props.desk_banner_1,
            desk_banner_2: banner.props.desk_banner_2,
            desk_banner_3: banner.props.desk_banner_3,
            mob_banner_1: banner.props.mob_banner_1,
            mob_banner_2: banner.props.mob_banner_2,
            mob_banner_3: banner.props.mob_banner_3,
          }).props
      );
    } catch (error) {
      console.log("GetBannersUseCase ~ execute ~ error", error);
      throw error;
    }
  }
}
