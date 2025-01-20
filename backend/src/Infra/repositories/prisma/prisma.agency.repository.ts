import { prisma } from "../../Database/prisma";
import { Agency } from "../../../Domain/Entities/Agency/Agency";
import { IAgenciesResponse, IAgencyRespository } from "../../../Domain/Entities/Agency/agency.respository";

export class PrismaAgencyRepository implements IAgencyRespository {
  async save(agency: Agency): Promise<void> {
    await prisma.agencies.create({
      data: {
        name: agency.name,
        location_text: agency.location_text,
        latitude: agency.latitude,
        longitude: agency.longitude,
        phone: agency.phone,
        createdAt: agency.createdAt ?? new Date(),
      },
    });
  }

  async getAll(page: number = 1, pageSize: number = 1): Promise<IAgenciesResponse> {
    const skip = (page - 1) * pageSize;
    const take = pageSize;

    const totalRecords = await prisma.agencies.count();
    const totalPages = Math.ceil(totalRecords / pageSize);

    const agencies = await prisma.agencies.findMany({
      skip,
      take,
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      data: agencies.map((agency) =>
        Agency.create({
          id: agency.id,
          name: agency.name,
          phone: agency.phone,
          latitude: agency.latitude,
          longitude: agency.longitude,
          location_text: agency.location_text,
          createdAt: agency.createdAt,
        })
      ),
      totalPages,
      totalRecords,
    };
  }

  async getById(id: string): Promise<Agency | null> {
    const agency = await prisma.agencies.findUnique({ where: { id } });
    if (!agency) return null;
    return Agency.create({
      id: agency.id,
      name: agency.name,
      phone: agency.phone,
      latitude: agency.latitude,
      longitude: agency.longitude,
      createdAt: agency.createdAt,
      location_text: agency.location_text,
    });
  }

  async update(id: string, data: Partial<Agency>): Promise<Agency> {
    const agency = await prisma.agencies.update({
      where: { id },
      data: {
        name: data.name,
        phone: data.phone,
        latitude: data.latitude,
        longitude: data.longitude,
        location_text: data.location_text,
      },
    });

    return Agency.create({
      id: agency.id,
      name: agency.name,
      phone: agency.phone,
      latitude: agency.latitude,
      longitude: agency.longitude,
      location_text: agency.location_text,
      createdAt: agency.createdAt,
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.agencies.delete({ where: { id } });
  }
}
