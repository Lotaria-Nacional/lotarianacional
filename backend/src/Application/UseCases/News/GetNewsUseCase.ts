import { News } from "../../../Domain/Entities/News/News"
import { INewsRespository } from "../../../Domain/Entities/News/INewsRepository"

export class GetNewsUseCase {
  constructor(private newsRepository: INewsRespository) {}

  async execute(): Promise<News[] | []> {
    const news = await this.newsRepository.getAll()
    return news
  }
}
