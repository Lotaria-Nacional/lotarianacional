import { prisma } from "../../Database/prisma"
import { Banner } from "../../../Domain/Entities/banner/banner"
import { NotFoundError } from "../../../shared/errors/notFound.error"
import { IBannerRespository } from "../../../Domain/Entities/banner/banner.repository"

export class PrismaBannerRepository implements IBannerRespository {
  async save(banner: Banner): Promise<void> {
    await prisma.banners.create({
      data: {
        desktop_banner_1: banner.desk_banner_1 as string,
        desktop_banner_2: banner.desk_banner_2 as string,
        desktop_banner_3: banner.desk_banner_3 as string,
        mobile_banner_1: banner.mob_banner_1 as string,
        mobile_banner_2: banner.mob_banner_2 as string,
        mobile_banner_3: banner.mob_banner_3 as string,
      },
    })
  }

  async getAll(): Promise<Banner[]> {
    const banners = await prisma.banners.findMany()
    return banners.map((banner) =>
      Banner.create({
        id: banner.id,
        desk_banner_1: banner.desktop_banner_1,
        desk_banner_2: banner.desktop_banner_2,
        desk_banner_3: banner.desktop_banner_3,
        mob_banner_1: banner.mobile_banner_1,
        mob_banner_2: banner.mobile_banner_2,
        mob_banner_3: banner.mobile_banner_3,
      })
    )
  }

  async getById(id: string): Promise<Banner | null> {
    const existingBanner = await prisma.banners.findUnique({ where: { id } })
    if (!existingBanner) return null

    return Banner.create({
      id: existingBanner.id,
      desk_banner_1: existingBanner.desktop_banner_1,
      desk_banner_2: existingBanner.desktop_banner_2,
      desk_banner_3: existingBanner.desktop_banner_3,
      mob_banner_1: existingBanner.mobile_banner_1,
      mob_banner_2: existingBanner.mobile_banner_2,
      mob_banner_3: existingBanner.mobile_banner_3,
    })
  }

  async update(id: string, data: Partial<Banner>): Promise<void> {
    const existingBanner = await prisma.banners.findUnique({ where: { id } })
    if (!existingBanner) throw new NotFoundError("Banner não encontrado.")

    await prisma.banners.update({
      where: { id },
      data: {
        desktop_banner_1:
          (data.desk_banner_1 as string) ?? existingBanner.desktop_banner_1,
        desktop_banner_2:
          (data.desk_banner_2 as string) ?? existingBanner.desktop_banner_2,
        desktop_banner_3:
          (data.desk_banner_3 as string) ?? existingBanner.desktop_banner_3,
        mobile_banner_1:
          (data.mob_banner_1 as string) ?? existingBanner.mobile_banner_1,
        mobile_banner_2:
          (data.mob_banner_2 as string) ?? existingBanner.mobile_banner_2,
        mobile_banner_3:
          (data.mob_banner_3 as string) ?? existingBanner.mobile_banner_3,
      },
    })
  }

  async delete(id: string): Promise<void> {
    const existingBanner = await prisma.banners.findUnique({ where: { id } })
    if (!existingBanner) throw new NotFoundError("Banner não encontrado.")

    await prisma.banners.delete({ where: { id } })
  }
}
