import { News } from "../../../Domain/Entities/News/News";
import { IFileUpload } from "../../../Domain/services/fileUpload.service.interface";
import { NotFoundError } from "../../../shared/errors/notFound.error";
import { getCloudinaryPublicId } from "../../../utils/get.cloudinaryPublicId";
import { INewsRespository } from "../../../Domain/Entities/News/news.repository";

type UpdateNewsInputDTO = {
  title?: string;
  image?: string | Buffer;
  description?: string;
};

export class UpdateNewsUseCase {
  constructor(private newsRepository: INewsRespository, private fileUpload: IFileUpload) {}

  async execute(id: string, data: UpdateNewsInputDTO): Promise<News> {
    const news = await this.newsRepository.getById(id);

    if (!news) throw new NotFoundError("Notícia não encontrada.");
    if (data.image) {
      let newImage: string | Buffer;
      if (news.image && typeof news.image === "string") {
        const publicId = getCloudinaryPublicId(news.image);
        if (publicId) {
          await this.fileUpload.delete(publicId, "image");
        }
      }
      newImage = await this.fileUpload.upload(data.image!, "lotaria_nacional/news", "image");

      news.update({ ...data, image: newImage });
      await this.newsRepository.update(id, news);
    } else {
      news.update(data);
      await this.newsRepository.update(id, news);
    }

    return news;
  }
}
