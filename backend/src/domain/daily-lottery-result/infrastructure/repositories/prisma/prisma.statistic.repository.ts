import { Prisma, PrismaClient } from "@prisma/client";
import { IStatisticRepository } from "../../../application/interfaces/statistic.repository";
import { Statistic } from "../../../enterprise/entities/statistic";

export class PrismaStatisticRepository implements IStatisticRepository {
  constructor(private prisma:PrismaClient | Prisma.TransactionClient){}

  async save(statistic: Statistic): Promise<void> {
    await this.prisma.statistics.create({
      data: {
        file: statistic.file,
        statsData: statistic.statsData,
        createdAt: statistic.createdAt!,
      },
    });
  }

  async get(): Promise<Statistic | null> {
    const statistic = await this.prisma.statistics.findFirst({
      orderBy: { createdAt: "desc" },
    });

    if (!statistic) return null;

    return Statistic.create({
      id: statistic.id,
      file: statistic.file,
      statsData: statistic.statsData,
      createdAt: statistic.createdAt,
    });
  }

  async delete(id: string): Promise<void> {
    if (!id) {
      console.error("ID não fornecido para deletar a estatística.");
      throw new Error("ID é obrigatório para deletar a estatística.");
    }
    try {
      await this.prisma.statistics.delete({ where: { id } });
    } catch (error) {
      console.error(`Erro ao deletar a estatística com o ID: ${id}: `, error);
      throw error;
    }
  }
}
