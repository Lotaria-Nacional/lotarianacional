import { News } from "../../enterprise/entities/news";
import { NotFoundError } from "../../../../core/errors/common/not-found.error";
import { INewsRespository } from "../interfaces/news.repository";
import { EditNewsDTO } from "../../presentation/validations/edit-news.schema";
import { IFileUpload } from "../../../../core/contracts/file-upload.interface";
import { getCloudinaryPublicId } from "../../../../shared/utils/get-cloudinary-public-id";

export class UpdateNewsUseCase {
  constructor(
    private newsRepository: INewsRespository,
    private fileUpload: IFileUpload,
  ) {}

  async execute(data: EditNewsDTO): Promise<News> {
    const news = await this.newsRepository.getById(data.id);

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

      await this.newsRepository.save(news);
    } else {
      news.update(data);
      await this.newsRepository.save(news);
    }

    return news;
  }
}
