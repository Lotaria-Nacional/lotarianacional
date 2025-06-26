import { INewsResponse, INewsRespository } from "../interfaces/news.repository";

type GetNewsInputDTO = {
  page: number;
  pageSize: number;
};

export class FetchManyNewsUseCase {
  constructor(private newsRepository: INewsRespository) {}

  async execute(data: GetNewsInputDTO): Promise<INewsResponse | []> {
    const { page, pageSize } = data;
    try {
      const news = await this.newsRepository.getAll(page, pageSize);
      return news;
    } catch (error) {
      console.log("GetNewsUseCase ~ execute ~ error", error);
      throw new Error("Não foi possível listar as news");
    }
  }
}
