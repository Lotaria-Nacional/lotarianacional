import { prisma } from "../../database/prisma"
import { Agency } from "../../../domain/entities/agency/agency"
import { IAgencyRespository } from "../../../domain/entities/agency/agency.respository"

export class PrismaAgencyRepository implements IAgencyRespository {
  async save(agency: Agency): Promise<void> {
    await prisma.agencies.create({
      data: {
        name: agency.name,
        location_text: agency.location_text,
        latitude: agency.latitude,
        longitude: agency.longitude,
        createdAt: agency.createdAt ?? new Date(),
      },
    })
  }

  async getAll(): Promise<Agency[]> {
    const agencies = await prisma.agencies.findMany()
    if (agencies.length === 0) return []
    return agencies.map((agency) =>
      Agency.create({
        id: agency.id,
        name: agency.name,
        latitude: agency.latitude,
        longitude: agency.longitude,
        location_text: agency.location_text,
        createdAt: agency.createdAt,
      })
    )
  }

  async getById(id: string): Promise<Agency | null> {
    const agency = await prisma.agencies.findUnique({ where: { id } })
    if (!agency) return null
    return Agency.create({
      id: agency.id,
      name: agency.name,
      latitude: agency.latitude,
      longitude: agency.longitude,
      createdAt: agency.createdAt,
      location_text: agency.location_text,
    })
  }

  async update(id: string, data: Partial<Agency>): Promise<Agency> {
    const agency = await prisma.agencies.update({
      where: { id },
      data: {
        name: data.name,
        latitude: data.latitude,
        longitude: data.longitude,
        location_text: data.location_text,
      },
    })

    return Agency.create({
      id: agency.id,
      name: agency.name,
      latitude: agency.latitude,
      longitude: agency.longitude,
      location_text: agency.location_text,
      createdAt: agency.createdAt,
    })
  }

  async delete(id: string): Promise<void> {
    await prisma.agencies.delete({ where: { id } })
  }
}
