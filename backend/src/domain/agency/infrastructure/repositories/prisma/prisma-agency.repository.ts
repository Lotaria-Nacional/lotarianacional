import { IAgencyRespository } from "@/domain/agency/application/interfaces/agency-respository.interface";
import { Agency } from "@/domain/agency/enterprise/entities/agency.entity";
import { Prisma, PrismaClient } from "@prisma/client";

export class PrismaAgencyRepository implements IAgencyRespository {
  constructor(private prisma:PrismaClient | Prisma.TransactionClient){}

  async create(agency: Agency): Promise<void> {
    await this.prisma.agencies.create({
      data: {
        type: agency.type,
        name: agency.name,
        location_text: agency.location_text,
        latitude: agency.latitude,
        longitude: agency.longitude,
        phone: agency.phone,
        createdAt: agency.createdAt ?? new Date(),
      },
    });
  }

  async getAll(): Promise<Agency[]> {

    const agencies = await this.prisma.agencies.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return agencies.map((agency) =>
        Agency.create({
          id: agency.id,
          type: agency.type,
          name: agency.name,
          phone: agency.phone,
          latitude: agency.latitude,
          longitude: agency.longitude,
          location_text: agency.location_text,
          createdAt: agency.createdAt,
        })
      )
  }

  async getById(id: string): Promise<Agency | null> {
    const agency = await this.prisma.agencies.findUnique({ where: { id } });
    if (!agency) return null;
    return Agency.create({
      id: agency.id,
      name: agency.name,
      type: agency.type,
      phone: agency.phone,
      latitude: agency.latitude,
      longitude: agency.longitude,
      createdAt: agency.createdAt,
      location_text: agency.location_text,
    });
  }

  async save(id: string, data: Partial<Agency>): Promise<Agency> {
    const agency = await this.prisma.agencies.update({
      where: { id },
      data: {
        name: data.name,
        phone: data.phone,
        type: data.type,
        latitude: data.latitude,
        longitude: data.longitude,
        location_text: data.location_text,
      },
    });

    return Agency.create({
      id: agency.id,
      name: agency.name,
      type: agency.type,
      phone: agency.phone,
      latitude: agency.latitude,
      longitude: agency.longitude,
      location_text: agency.location_text,
      createdAt: agency.createdAt,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.agencies.delete({ where: { id } });
  }
}