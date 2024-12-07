import { News } from "../../../Domain/Entities/News/News"
import { IFileUpload } from "../../../Domain/Services/IFileUpload"
import { NotFoundError } from "../../../Shared/Errors/NotFoundError"
import { getCloudinaryPublicId } from "../../../Utils/GetCloudinaryPublicId"
import { INewsRespository } from "../../../Domain/Entities/News/INewsRepository"

type UpdateNewsInputDTO = {
  title?: string
  image?: string | Buffer
  description?: string
}

export class UpdateNewsUseCase {
  constructor(
    private newsRepository: INewsRespository,
    private fileUpload: IFileUpload
  ) {}

  async execute(id: string, data: UpdateNewsInputDTO): Promise<News> {
    const news = await this.newsRepository.getById(id)
    let newImage: string | Buffer

    if (!news) throw new NotFoundError("Notícia não encontrada.")
    if (data.image) {
      if (news.image && typeof news.image === "string") {
        const publicId = getCloudinaryPublicId(news.image)
        if (publicId) {
          await this.fileUpload.delete(publicId)
        }
      }
    }
    newImage = await this.fileUpload.upload(
      data.image!,
      "lotaria_nacional/news"
    )

    news.update({ ...data, image: newImage })
    await this.newsRepository.update(id, news)

    return news
  }
}
