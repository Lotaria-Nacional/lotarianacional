import { News } from "../../../Domain/Entities/News/News"
import { IFileUpload } from "../../../Domain/Services/IFileUpload"
import { INewsRespository } from "../../../Domain/Entities/News/INewsRepository"

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
