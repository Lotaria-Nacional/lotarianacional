import { News } from "../../../domain/entities/news/news"
import { INewsRespository } from "../../../domain/entities/news/news.repository"

export class GetNewsUseCase {
  constructor(private newsRepository: INewsRespository) {}

  async execute(): Promise<News[] | []> {
    const news = await this.newsRepository.getAll()
    return news
  }
}
