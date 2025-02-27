import { IFileUpload } from "../../../Domain/services/fileUpload.service.interface"
import { NotFoundError } from "../../../shared/errors/notFound.error"
import { getCloudinaryPublicId } from "../../../utils/get.cloudinaryPublicId"
import { INewsRespository } from "../../../Domain/Entities/News/news.repository"

export class DeleteNewsUseCase {
  constructor(
    private newsRespository: INewsRespository,
    private fileUpload: IFileUpload
  ) {}

  async execute(id: string) {
    const existingNews = await this.newsRespository.getById(id)
    if (!existingNews) throw new NotFoundError("Notícia não encontrada.")

    if (existingNews.image && typeof existingNews.image === "string") {
      const publicId = getCloudinaryPublicId(existingNews.image)
      if (publicId) {
        await this.fileUpload.delete(publicId, "image");
      }
    }

    await this.newsRespository.delete(id)
  }
}
