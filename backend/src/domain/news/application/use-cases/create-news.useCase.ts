import { News } from "../../enterprise/entities/news";
import { INewsRespository } from "../interfaces/news.repository";
import { IFileUpload } from "../../../../core/interfaces/file-upload.interface";

type CreateNewsInputDTO = {
  title: string;
  description: string;
  image: string | Buffer;
};

export class CreateNewsUseCase {
  constructor(private newsRepository: INewsRespository, private fileUpload: IFileUpload) {}

  async execute(data: CreateNewsInputDTO) {
    const imageURL = await this.fileUpload.upload(data.image, "lotaria_nacional/news", "image");
    const news = News.create({ ...data, image: imageURL });
    console.log("use case reached")
    await this.newsRepository.save(news);

  }
}