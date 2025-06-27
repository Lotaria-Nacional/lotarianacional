import { PrismaClient, Prisma } from "@prisma/client";
import { Emission } from "@/domain/daily-lottery-result/enterprise/entities/emission.entity";
import { IEmissionRepository } from "@/domain/daily-lottery-result/application/interfaces/emission.repository";

export class PrismaEmissionRepository implements IEmissionRepository {
  constructor(private prisma:PrismaClient | Prisma.TransactionClient){}

  async getAll(): Promise<Emission[]> {
    const emissions = await this.prisma.emission.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return emissions.map((emission) =>
      Emission.create({
        url: emission.url ?? null,
        description: emission.description ?? "",
        formatedData: emission.formatedData ?? "",
        createdAt: emission.createdAt ?? new Date(),
      })
    );
  }
  async save(emission: Emission): Promise<void> {
    const { url, description, formatedData, createdAt } = emission.toJSON();
    try {
      await this.prisma.emission.create({
        data: {
          url,
          description,
          formatedData,
          createdAt,
        },
      });
      console.log("Salvo");
    } catch (error) {
      throw new Error("Infra ~ Erro ao criar a emissão.");
    }
  }
}
