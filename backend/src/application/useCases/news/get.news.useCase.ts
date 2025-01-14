import { INewsResponse, INewsRespository } from "../../../Domain/Entities/News/news.repository";

type GetNewsInputDTO = {
  page: number;
  pageSize: number;
};

export class GetNewsUseCase {
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
