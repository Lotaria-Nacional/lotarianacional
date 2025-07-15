// import { IFileUpload } from "../../../../core/contracts/file-upload.interface";
import { NotFoundError } from "../../../../core/errors/common/not-found.error";
import { INewsRespository } from "../interfaces/news.repository";

export class DeleteNewsUseCase {
  constructor(
    private newsRespository: INewsRespository,
  ) {}

  async execute(id: string) {
    const existingNews = await this.newsRespository.getById(id);
    if (!existingNews) throw new NotFoundError("Notícia não encontrada.");

    // if (existingNews.image && typeof existingNews.image === "string") {
    //   const publicId = getCloudinaryPublicId(existingNews.image);
    //   if (publicId) {
    //     await this.fileUpload.delete(publicId, "image");
    //   }
    // }

    await this.newsRespository.delete(id);
  }
}
