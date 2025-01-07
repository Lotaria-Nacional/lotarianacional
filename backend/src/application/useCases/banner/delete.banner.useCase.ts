import { NotFoundError } from "../../../shared/errors/notFound.error"
import { getCloudinaryPublicId } from "../../../utils/get.cloudinaryPublicId"
import { IFileUpload } from "../../../Domain/services/fileUpload.service.interface"
import { IBannerRespository } from "../../../Domain/Entities/banner/banner.repository"

export class DeleteBannerUseCase {
  constructor(
    private bannerRepository: IBannerRespository,
    private fileUploadService: IFileUpload
  ) {}
  async execute(id: string) {
    const existingBanner = await this.bannerRepository.getById(id)
    if (!existingBanner) throw new NotFoundError("Não encontrado.")

    await this.deleteFiles(existingBanner?.props.desk_banner_1 as string)
    await this.deleteFiles(existingBanner?.props.desk_banner_2 as string)
    await this.deleteFiles(existingBanner?.props.desk_banner_3 as string)
    await this.deleteFiles(existingBanner?.props.mob_banner_1 as string)
    await this.deleteFiles(existingBanner?.props.mob_banner_2 as string)
    await this.deleteFiles(existingBanner?.props.mob_banner_3 as string)

    await this.bannerRepository.delete(id)
  }

  async deleteFiles(file: string) {
    if (!file) return
    const publicId = getCloudinaryPublicId(file)
    if (!publicId) throw new Error("Não foi possível remover a imagem.")
    try {
      await this.fileUploadService.delete(publicId)
    } catch (error: any) {
      throw new Error(
        `Erro ao excluir o arquivo com publicId ${publicId}: ${error.message}`
      )
    }
  }
}
