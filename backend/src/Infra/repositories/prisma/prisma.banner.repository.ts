import { prisma } from "../../Database/prisma";
import { Banner } from "../../../Domain/Entities/banner/banner";
import { NotFoundError } from "../../../shared/errors/notFound.error";
import { IBannerRespository } from "../../../Domain/Entities/banner/banner.repository";

export class PrismaBannerRepository implements IBannerRespository {
  async save(banner: Banner): Promise<void> {
    try {
      await prisma.banner.create({
        data: {
          image: banner.props.image,
          device: banner.props.device,
        },
      });
    } catch (error) {
      console.log("PrismaBannerRepository ~ save ~ error", error);
      throw new Error("Infra ~ Erro ao salvar o banner");
    }
  }

  async getAll(): Promise<Banner[]> {
    try {
      const banners = await prisma.banner.findMany({ orderBy: { createdAt: "asc" } });
      return banners.map((banner) =>
        Banner.create({
          id: banner.id,
          image: banner.image,
          device: banner.device,
          createdAt: banner.createdAt,
        })
      );
    } catch (error) {
      throw new Error("Infra ~ Erro ao obter/listar os banners");
    }
  }

  async getById(id: string): Promise<Banner> {
    try {
      const banner = await prisma.banner.findUnique({ where: { id } });
      if (!banner) {
        throw new NotFoundError("Infra ~ Banner não encontrado.");
      }
      return Banner.create({
        id: banner.id,
        image: banner.image,
        device: banner.device,
        createdAt: banner.createdAt,
      });
    } catch (error) {
      console.log("PrismaBannerRepository ~ getById ~ error", error);
      throw new Error("Infra ~ Banner não encontrado.");
    }
  }

  async update(id: string, newBanner: Banner): Promise<void> {
    try {
      await prisma.banner.update({
        where: { id },
        data: {
          image: newBanner.props.image,
          device: newBanner.props.device,
        },
      });
    } catch (error) {}
  }

  async delete(id: string): Promise<void> {
    try {
      await prisma.banner.delete({
        where: { id },
      });
    } catch (error) {
      console.log("PrismaBannerRepository ~ delete ~ error", error);
      throw new Error("Infra ~ Erro ao deletar o banner");
    }
  }
}
