import { News } from "../../../domain/entities/news/news"
import { INewsRespository } from "../../../domain/entities/news/news.repository"
import { IFileUpload } from "../../../domain/services/fileUpload.service.interface"

type CreateNewsInputDTO = {
  title: string
  image: string | Buffer
  description: string
}

export class CreateNewsUseCase {
  constructor(
    private newsRepository: INewsRespository,
    private fileUpload: IFileUpload
  ) {}

  async execute(data: CreateNewsInputDTO) {
    const imageURL = await this.fileUpload.upload(
      data.image,
      "lotaria_nacional/news"
    )
    const news = News.create({ ...data, image: imageURL })
    await this.newsRepository.save(news)
  }
}
