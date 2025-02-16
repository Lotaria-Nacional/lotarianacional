import { prisma } from "../../Database/prisma";
import { Statistic } from "../../../Domain/Entities/Statistic/statistic";
import { IStatisticRepository } from "../../../Domain/Entities/Statistic/statistic.repository";

export class PrismaStatisticRepository implements IStatisticRepository {
  async save(statistic: Statistic): Promise<void> {
    await prisma.statistics.create({
      data: {
        file: statistic.file,
        statsData: statistic.statsData,
        createdAt: statistic.createdAt!,
      },
    });
  }

  async get(): Promise<Statistic | null> {
    const statistic = await prisma.statistics.findFirst({
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
      await prisma.statistics.delete({ where: { id } });
    } catch (error) {
      console.error(`Erro ao deletar a estatística com o ID: ${id}: `, error);
      throw error;
    }
  }
}
