import { Prisma, PrismaClient } from "@prisma/client";
import { News } from "../../../enterprise/entities/news";
import { INewsRespository, INewsResponse } from "../../../application/interfaces/news.repository";

export class PrismaNewsRespository implements INewsRespository {
  constructor(private prisma:PrismaClient | Prisma.TransactionClient){}

  async create(news: News): Promise<void> {
    await this.prisma.news.create({
      data: {
        title: news.title,
        createdAt: news.createdAt,
        image: news.image as string,
        description: news.description,
      },
    });
    console.log("infra reached")
  }


  async save( data: Partial<News>): Promise<News> {
    const result = await this.prisma.news.update({
      where: { id:data.id },
      data: {
        title: data.title,
        description: data.description,
        image: data.image as string,
      },
    });
    return News.create({
      id: result.id,
      title: result.title,
      image: result.image,
      createdAt: result.createdAt,
      description: result.description,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.news.delete({ where: { id } });
  }

  async getById(id: string): Promise<News | null> {
    const data = await this.prisma.news.findUnique({ where: { id } });
    if (!data) return null;

    return News.create({
      id: data.id,
      image: data.image,
      title: data?.title,
      createdAt: data?.createdAt,
      description: data?.description,
    });
  }

  async getAll(page: number = 1, pageSize: number): Promise<INewsResponse> {
    const skip = (page - 1) * pageSize;
    const take = pageSize;

    const totalRecords = await this.prisma.news.count();
    const totalPages = Math.ceil(totalRecords / pageSize);

    const news = await this.prisma.news.findMany({
      skip,
      take,
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      data: news.map((news) =>
        News.create({
          id: news.id,
          title: news.title,
          image: news.image,
          description: news.description,
          createdAt: news.createdAt
        })
      ),
      totalPages,
      totalRecords,
    };
  }

}
