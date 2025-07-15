import { PaginationParams } from "../../../../core/@types/pagination-params";
import { prisma } from "../../../../main/config/prisma";
import { IPartnerJobOppeningRepository } from "../../application/interfaces/partner-job-oppening.repository";
import { PartnerJobOppening } from "../../enterprise/entities/partner-job-oppening";
import { PartnerJobOppeningMapper } from "../mappers/partner-job-oppening.mapper";

export class PrismaPartnerJobOppeningRepository implements IPartnerJobOppeningRepository {
  async create(partnerjobOppening: PartnerJobOppening): Promise<void> {
    await prisma.partnerjobOppening.create({
      data: PartnerJobOppeningMapper.toPersistence(partnerjobOppening),
    });
  }

  async save(partnerjobOppening: PartnerJobOppening): Promise<void> {
    await prisma.partnerjobOppening.update({
      where: { id: partnerjobOppening.id },
      data: PartnerJobOppeningMapper.toPersistence(partnerjobOppening),
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.partnerjobOppening.delete({
      where: { id },
    });
  }

  async getById(id: string): Promise<PartnerJobOppening | null> {
    const PartnerjobOppening = await prisma.partnerjobOppening.findUnique({
      where: { id },
    });

    if (!PartnerjobOppening) return null;

    return PartnerJobOppeningMapper.toDomain(PartnerjobOppening);
  }

  async fetchMany(params?: PaginationParams): Promise<PartnerJobOppening[]> {
    const partnerjobOppenings = await prisma.partnerjobOppening.findMany({
      skip: params?.page,
      take: params?.limit,
      orderBy: {
        createdAt: "desc",
      },
    });

    return partnerjobOppenings.map((jobs) => PartnerJobOppeningMapper.toDomain(jobs));
  }

  async countAll(): Promise<number> {
    return prisma.partnerjobOppening.count();
  }
}
