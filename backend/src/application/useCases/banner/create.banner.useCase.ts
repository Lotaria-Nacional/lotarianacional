import { Banner, BannerProps } from "../../../Domain/Entities/banner/banner"
import { IFileUpload } from "../../../Domain/services/fileUpload.service.interface"
import { IBannerRespository } from "../../../Domain/Entities/banner/banner.repository"

type CreateBannerInputDTO = {
  desk_banner_1?: string | Buffer
  desk_banner_2?: string | Buffer
  desk_banner_3?: string | Buffer
  mob_banner_1?: string | Buffer
  mob_banner_2?: string | Buffer
  mob_banner_3?: string | Buffer
}

export class CreateBannerUseCase {
  constructor(
    private bannerRepository: IBannerRespository,
    private fileUploadService: IFileUpload
  ) {}

  async execute(data: CreateBannerInputDTO) {
    const {desk_banner_1,desk_banner_2,desk_banner_3,mob_banner_1,mob_banner_2,mob_banner_3 } = data

    const dBan1 = await this.uploadFileHelper(desk_banner_1)
    const dBan2 = await this.uploadFileHelper(desk_banner_2)
    const dBan3 = await this.uploadFileHelper(desk_banner_3)

    const mBan1 = await this.uploadFileHelper(mob_banner_1)
    const mBan2 = await this.uploadFileHelper(mob_banner_2)
    const mBan3 = await this.uploadFileHelper(mob_banner_3)

    const banner = Banner.create({
      desk_banner_1: dBan1,
      desk_banner_2: dBan2,
      desk_banner_3: dBan3,
      mob_banner_1: mBan1,
      mob_banner_2: mBan2,
      mob_banner_3: mBan3,
    })

    await this.bannerRepository.save(banner)
  }

  async uploadFileHelper(file?: string | Buffer) {
    return file
      ? await this.fileUploadService.upload(file, "lotaria_nacional/banners")
      : ""
  }
}
