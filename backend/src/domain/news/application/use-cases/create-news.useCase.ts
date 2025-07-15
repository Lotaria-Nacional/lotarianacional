import { News } from "../../enterprise/entities/news";
import { INewsRespository } from "../interfaces/news.repository";
import { CreateNewsDTO } from "../../presentation/validations/create-news.schema";
import { IFileUpload } from "../../../../core/contracts/file-upload.interface";

export class CreateNewsUseCase {
  constructor(private newsRepository: INewsRespository, private fileUpload?: IFileUpload) {}

  async execute(data: CreateNewsDTO) {
    
    const news = News.create({ ...data, image: "" });

    await this.newsRepository.save(news);
  }
}