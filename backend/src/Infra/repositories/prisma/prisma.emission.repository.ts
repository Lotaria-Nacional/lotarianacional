import { prisma } from "../../Database/prisma";
import { Emission } from "../../../Domain/Entities/emission/emission.entity";
import { IEmissionRepository } from "../../../Domain/Entities/emission/emission.repository";

export class PrismaEmissionRepository implements IEmissionRepository {
  async getAll(): Promise<Emission[]> {
    const emissions = await prisma.emission.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return emissions.map((emission) =>
      Emission.create({
        url: emission.url,
        description: emission.description ?? "",
        formatedData: emission.formatedData ?? "",
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
    } catch (error) {
      console.log("PrismaEmissionRepository ~ save ~ error --> ", error);
      throw new Error("Infra ~ Erro ao criar a emissão.");
    }
  }
}
