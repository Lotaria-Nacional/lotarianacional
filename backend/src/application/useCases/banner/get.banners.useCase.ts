import { Banner } from "../../../domain/entities/banner/banner"
import { IBannerRespository } from "../../../domain/entities/banner/banner.repository"

export class GetBannersUseCase {
  constructor(private bannerRepository: IBannerRespository) {}

  async execute(): Promise<Banner[]> {
    const banners = await this.bannerRepository.getAll()
    return banners
  }
}
