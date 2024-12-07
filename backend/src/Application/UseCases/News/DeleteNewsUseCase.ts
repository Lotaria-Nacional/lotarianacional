import { IFileUpload } from "../../../Domain/Services/IFileUpload"
import { NotFoundError } from "../../../Shared/Errors/NotFoundError"
import { getCloudinaryPublicId } from "../../../Utils/GetCloudinaryPublicId"
import { INewsRespository } from "../../../Domain/Entities/News/INewsRepository"

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
        await this.fileUpload.delete(publicId)
      }
    }

    await this.newsRespository.delete(id)
  }
}
