import { News } from "../../../Domain/Entities/News/News"
import { INewsRespository } from "../../../Domain/Entities/News/news.repository"
import { IFileUpload } from "../../../Domain/services/fileUpload.service.interface"

type CreateNewsInputDTO = {
  title: string
  description: string
  image: string | Buffer
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
