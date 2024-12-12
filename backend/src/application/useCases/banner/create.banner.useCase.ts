import { Banner } from "../../../domain/entities/banner/banner"
import { IBannerRespository } from "../../../domain/entities/banner/banner.repository"
import { IFileUpload } from "../../../domain/services/fileUpload.service.interface"

type CreateBannerInputDTO = {
  desktop_banner_1?: any
  desktop_banner_2?: any
  desktop_banner_3?: any
  mobile_banner_1?: any
  mobile_banner_2?: any
  mobile_banner_3?: any
}

export class CreateBannerUseCase {
  constructor(
    private bannerRepository: IBannerRespository,
    private fileUploadService: IFileUpload
  ) {}

  async execute(data: CreateBannerInputDTO) {
    const dBanner1 = await this.fileUploadService.upload(
      data.desktop_banner_1,
      "lotaria_nacional/banners"
    )
    const dBanner2 = await this.fileUploadService.upload(
      data.desktop_banner_2,
      "lotaria_nacional/banners"
    )
    const dBanner3 = await this.fileUploadService.upload(
      data.desktop_banner_3,
      "lotaria_nacional/banners"
    )
    const mBanner1 = await this.fileUploadService.upload(
      data.mobile_banner_1,
      "lotaria_nacional/banners"
    )
    const mBanner2 = await this.fileUploadService.upload(
      data.mobile_banner_2,
      "lotaria_nacional/banners"
    )
    const mBanner3 = await this.fileUploadService.upload(
      data.mobile_banner_3,
      "lotaria_nacional/banners"
    )

    const banner = Banner.create({
      desktop_banner_1: dBanner1,
      desktop_banner_2: dBanner2,
      desktop_banner_3: dBanner3,
      mobile_banner_1: mBanner1,
      mobile_banner_2: mBanner2,
      mobile_banner_3: mBanner3,
    })

    await this.bannerRepository.save(banner)
  }
}
