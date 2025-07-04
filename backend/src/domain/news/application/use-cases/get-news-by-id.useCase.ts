import { NotFoundError } from "../../../../core/errors/common/not-found.error";
import { News } from "../../enterprise/entities/news";
import { INewsRespository } from "../interfaces/news.repository";

export class GetNewsByIdUseCase {
  constructor(private newsRepository: INewsRespository) {}

  async execute(id: string): Promise<News> {
    const data = await this.newsRepository.getById(id);
    if (!data) throw new NotFoundError("Notícia não encontrada.");

    return News.create({
      id: data.id,
      title: data.title,
      image: data.image,
      createdAt: data.createdAt,
      description: data.description,
    });
  }
}
