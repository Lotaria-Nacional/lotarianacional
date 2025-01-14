import { Request, Response } from "express";
import { GetNewsUseCase } from "../../../../application/useCases/news/get.news.useCase";

export class GetNewsController {
  constructor(private getNewsUseCase: GetNewsUseCase) {}
  async handle(req: Request, res: Response) {
    const { page = 1, pageSize = 10 } = req.query;
    const parsedPage = parseInt(page as string, 10);
    const parsedPageSize = parseInt(pageSize as string, 10);
    try {
      const news = await this.getNewsUseCase.execute({ page: parsedPage, pageSize: parsedPageSize });
      return res.status(200).json(news);
    } catch (error) {
      return res.status(500).json({ message: "Erro interno no servidor." });
    }
  }
}
