import { Banner } from "../../../Domain/Entities/banner/banner"
import { IBannerRespository } from "../../../Domain/Entities/banner/banner.repository"

export class GetBannersUseCase {
  constructor(private bannerRepository: IBannerRespository) {}

  async execute(): Promise<Banner[]> {
    const banners = await this.bannerRepository.getAll()
    return banners
  }
}
