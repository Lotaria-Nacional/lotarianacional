import { NotFoundError } from "../../../../core/errors/notFound.error";
import { IFileUpload } from "../../../../core/interfaces/file-upload.interface";
import { getCloudinaryPublicId } from "../../../../core/utils/get-cloudinary-public-id";
import { INewsRespository } from "../interfaces/news.repository";

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