import { UpdateResult, IResultRepository } from "../../../Domain/Entities/Result/result.respository";
import { prisma } from "../../Database/prisma";
import { Result } from "../../../Domain/Entities/Result/Result";

export class PrismaResultRespository implements IResultRepository {
  async save(result: Result): Promise<void> {
    await prisma.result.create({
      data: {
        name: result.name,
        videoURL: result.videoURL,
        startHour: result.hour,
        dailyId: result.dailyId!,
        number_1: result.number_1,
        number_2: result.number_2,
        number_3: result.number_3,
        number_4: result.number_4,
        number_5: result.number_5,
      },
    });
  }
  async getAll(): Promise<Result[]> {
    const results = await prisma.result.findMany({
      orderBy: { createdAt: "desc" },
    });

    return results.map((result) =>
      Result.create({
        id: result.id,
        name: result.name,
        hour: result.startHour,
        videoURL: result.videoURL,
        dailyId: result.dailyId,
        number_1: result.number_1,
        number_2: result.number_2,
        number_3: result.number_3,
        number_4: result.number_4,
        number_5: result.number_5,
      })
    );
  }

  async update(data: UpdateResult): Promise<Result | null> {
    const updatedResult = await prisma.result.update({
      where: { id: data.id },
      data: {
        name: data.name,
        startHour: data.hour,
        number_1: data.number_1,
        number_2: data.number_2,
        number_3: data.number_3,
        number_4: data.number_4,
        number_5: data.number_5,
        videoURL: data.videoURL,
      },
    });

    return Result.create({
      id: updatedResult.id,
      name: updatedResult.name,
      hour: updatedResult.startHour,
      videoURL: updatedResult.videoURL,
      number_1: updatedResult.number_1,
      number_2: updatedResult.number_2,
      number_3: updatedResult.number_3,
      number_4: updatedResult.number_4,
      number_5: updatedResult.number_5,
      createdAt: updatedResult.createdAt,
    });
  }

  async getById(id: string): Promise<Result | null> {
    const result = await prisma.result.findUnique({ where: { id } });
    if (!result) return null;
    return Result.create({
      id: result.id,
      name: result?.name,
      videoURL: result.videoURL,
      hour: result?.startHour,
      number_1: result.number_1,
      number_2: result.number_2,
      number_3: result.number_3,
      number_4: result.number_4,
      number_5: result.number_5,
      createdAt: result.createdAt,
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.result.delete({ where: { id } });
  }
}
