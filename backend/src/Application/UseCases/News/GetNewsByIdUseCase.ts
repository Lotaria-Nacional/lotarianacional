import { News } from "../../../Domain/Entities/News/News"
import { NotFoundError } from "../../../Shared/Errors/NotFoundError"
import { INewsRespository } from "../../../Domain/Entities/News/INewsRepository"

export class GetNewsByIdUseCase {
  constructor(private newsRepository: INewsRespository) {}

  async execute(id: string): Promise<News> {
    const data = await this.newsRepository.getById(id)
    if (!data) throw new NotFoundError("Notícia não encontrada.")

    return News.create({
      id: data.id,
      title: data.title,
      image: data.image,
      createdAt: data.createdAt,
      description: data.description,
    })
  }
}
