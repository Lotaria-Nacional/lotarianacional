import { prisma } from "../../../../../core/lib/prisma";
import { IEmissionRepository } from "../../../application/interfaces/emission.repository";
import { Emission } from "../../../enterprise/entities/emission.entity";

export class PrismaEmissionRepository implements IEmissionRepository {
  async getAll(): Promise<Emission[]> {
    const emissions = await prisma.emission.findMany({
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
      await prisma.emission.create({
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
