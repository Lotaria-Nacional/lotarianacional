import { prisma } from "../../Database/prisma"
import { News } from "../../../Domain/Entities/News/News"
import { INewsRespository } from "../../../Domain/Entities/News/news.repository"

export class PrismaNewsRespository implements INewsRespository {
  async delete(id: string): Promise<void> {
    await prisma.news.delete({ where: { id } })
  }
  async getById(id: string): Promise<News | null> {
    const data = await prisma.news.findUnique({ where: { id } })
    if (!data) return null

    return News.create({
      id: data.id,
      image: data.image,
      title: data?.title,
      createdAt: data?.createdAt,
      description: data?.description,
    })
  }

  async save(news: News): Promise<void> {
    await prisma.news.create({
      data: {
        title: news.title,
        createdAt: news.createdAt,
        image: news.image as string,
        description: news.description,
      },
    })
  }

  async getAll(): Promise<News[]> {
    const newsList = await prisma.news.findMany()

    return newsList.map((news) =>
      News.create({
        id: news.id,
        title: news.title,
        image: news.image,
        description: news.description,
      })
    )
  }

  async update(id: string, data: Partial<News>): Promise<News> {
    const result = await prisma.news.update({
      where: { id },
      data: {
        title: data.title,
        description: data.description,
        image: data.image as string,
      },
    })
    return News.create({
      id: result.id,
      title: result.title,
      image: result.image,
      createdAt: result.createdAt,
      description: result.description,
    })
  }
}
