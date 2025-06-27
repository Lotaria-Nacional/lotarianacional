import { PrismaClient, Prisma } from "@prisma/client";
import { LotteryResult } from "@/domain/daily-lottery-result/enterprise/entities/lottery-result";
import { ILotteryResultRepository, UpdateLotteryResult } from "@/domain/daily-lottery-result/application/interfaces/lottery-result.respository";

export class PrismaLotteryResultRespository implements ILotteryResultRepository {
  constructor(private prisma:PrismaClient | Prisma.TransactionClient){}

  async save(result: LotteryResult): Promise<void> {
    await this.prisma.result.create({
      data: {
        name: result.name,
        videoURL: result.videoURL ?? null,
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
  async getAll(): Promise<LotteryResult[]> {
    const results = await this.prisma.result.findMany({
      orderBy: { createdAt: "desc" },
    });

    return results.map((result) =>
      LotteryResult.create({
        id: result.id,
        name: result.name,
        hour: result.startHour,
        videoURL: result.videoURL ?? null,
        dailyId: result.dailyId,
        number_1: result.number_1,
        number_2: result.number_2,
        number_3: result.number_3,
        number_4: result.number_4,
        number_5: result.number_5,
      })
    );
  }

  async update(data: UpdateLotteryResult): Promise<LotteryResult | null> {
    const updatedResult = await this.prisma.result.update({
      where: { id: data.id },
      data: {
        videoURL: data.videoURL ?? null,
      },
    });

    return LotteryResult.create({
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

  async getById(id: string): Promise<LotteryResult | null> {
    const result = await this.prisma.result.findUnique({ where: { id } });
    if (!result) return null;
    return LotteryResult.create({
      id: result.id,
      name: result?.name,
      videoURL: result.videoURL ?? null,
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
    await this.prisma.result.delete({ where: { id } });
  }
}
