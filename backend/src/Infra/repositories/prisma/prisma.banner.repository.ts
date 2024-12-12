import { prisma } from "../../database/prisma"
import { Banner } from "../../../domain/entities/banner/banner"
import { NotFoundError } from "../../../shared/errors/notFound.error"
import { IBannerRespository } from "../../../domain/entities/banner/banner.repository"

export class PrismaBannerRepository implements IBannerRespository {
  async save(banner: Banner): Promise<void> {
    await prisma.banners.create({
      data: banner,
    })
  }
  async getAll(): Promise<Banner[]> {
    const banners = await prisma.banners.findMany()
    return banners.map((banner) => Banner.create({ ...banner, id: banner.id }))
  }
  async getById(id: string): Promise<Banner | null> {
    const existingBanner = await prisma.banners.findUnique({ where: { id } })
    if (!existingBanner) return null

    return Banner.create({ ...existingBanner, id: existingBanner.id })
  }
  async update(id: string, data: Partial<Banner>): Promise<void> {
    const existingBanner = await prisma.banners.findUnique({ where: { id } })
    if (!existingBanner) throw new NotFoundError("Não encontrado.")
    await prisma.banners.update({ where: { id }, data })
  }
  async delete(id: string): Promise<void> {
    const existingBanner = await prisma.banners.findUnique({ where: { id } })
    if (!existingBanner) throw new NotFoundError("Não encontrado.")
    await prisma.banners.delete({ where: { id } })
  }
}
