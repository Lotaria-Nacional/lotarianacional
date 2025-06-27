import { NotFoundError } from "@/core/errors/notFound.error";
import { IDailyLotteryResultRespository } from "@/domain/daily-lottery-result/application/interfaces/daily-lottery-result.repository";
import { DailyLotteryResult } from "@/domain/daily-lottery-result/enterprise/entities/daily-lottery-result";
import { LotteryResult } from "@/domain/daily-lottery-result/enterprise/entities/lottery-result";
import { Prisma, PrismaClient } from "@prisma/client";
import { addDays, startOfWeek } from "date-fns";



export class PrismaDailyLotteryResultsRespository implements IDailyLotteryResultRespository {
  constructor(private prisma:PrismaClient | Prisma.TransactionClient){}

  async create(DailyLotteryResult: DailyLotteryResult): Promise<void> {
    await this.prisma.dailyResult.create({
      data: {
        date: DailyLotteryResult.date!,
        formatedDate: DailyLotteryResult.formatedDate,
        results: {
          create: DailyLotteryResult.results.map((result) => ({
            id: result.id,
            name: result.name,
            videoURL: result.videoURL,
            startHour: result.hour,
            number_1: result.number_1,
            number_2: result.number_2,
            number_3: result.number_3,
            number_4: result.number_4,
            number_5: result.number_5,
            createdAt: result.createdAt,
          })),
        },
      },
    });
  }

  async save(dailyLotteryResult: DailyLotteryResult): Promise<void> {
    const exisitingDailyLotteryResult = await this.prisma.dailyResult.findUnique({
      where: { date: dailyLotteryResult.date },
      include: { results: true },
    });
    if (!exisitingDailyLotteryResult) throw new NotFoundError("Resultado diário não encontrado.");

    const lastResultAdded = dailyLotteryResult.results[dailyLotteryResult.results.length - 1];

    const newResult = await this.prisma.result.create({
      data: {
        dailyId:exisitingDailyLotteryResult.id,
        name: lastResultAdded.name,
        videoURL: lastResultAdded.videoURL,
        startHour: lastResultAdded.hour,
        number_1: lastResultAdded.number_1,
        number_2: lastResultAdded.number_2,
        number_3: lastResultAdded.number_3,
        number_4: lastResultAdded.number_4,
        number_5: lastResultAdded.number_5,
        createdAt: lastResultAdded.createdAt,
      },
    });

    exisitingDailyLotteryResult.results.push(newResult);

    await this.prisma.dailyResult.update({
      where: { id: exisitingDailyLotteryResult.id },
      data: {
        results: {
          connect: { id: newResult.id },
        },
      },
    });
  }
  
  async delete(id: string): Promise<void> {
    await this.prisma.result.deleteMany({
      where: { dailyId: id }, // Filtra pelo ID do DailyLotteryResult
    });

    // Exclui o DailyLotteryResult
    await this.prisma.dailyResult.delete({
      where: { id },
    });
  }

  async fetchMany(): Promise<DailyLotteryResult[]> {
    const dailyLotteryResults = await this.prisma.dailyResult.findMany({
      orderBy: {
        createdAt: "asc",
      },
      include: { results: true },
    });

    return dailyLotteryResults.map((dailyLotteryResult) =>
      DailyLotteryResult.create({
        id: dailyLotteryResult.id,
        date: dailyLotteryResult.date,
        createdAt: dailyLotteryResult.createdAt,
        formatedDate: dailyLotteryResult.formatedDate,
        results: dailyLotteryResult.results.map((result) =>
          LotteryResult.create({
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
            createdAt: result.createdAt,
          })
        ),
      })
    );
  }

  async getLast(): Promise<DailyLotteryResult | null> {
    const lastDailyLotteryResult = await this.prisma.dailyResult.findFirst({
      orderBy: {
        createdAt: "desc",
      },
      include: { results: true },
    });

    if (!lastDailyLotteryResult) return null;

    return DailyLotteryResult.create({
      id: lastDailyLotteryResult.id,
      date: lastDailyLotteryResult.date,
      formatedDate: lastDailyLotteryResult.formatedDate,
      results: lastDailyLotteryResult.results.map((result) =>
        LotteryResult.create({
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
          createdAt: result.createdAt,
        })
      ),
    });
  }

  async getAllWithFilter(date?: string): Promise<DailyLotteryResult[]> {
    let whereClause = {};

    if (date) {
      const targetDate = new Date(date);
      if (isNaN(targetDate.getTime())) {
        throw new Error("Formato de data inválido.");
      }
      const startOfTargetWeek = startOfWeek(targetDate, { weekStartsOn: 1 });
      const endOfTargetWeek = addDays(startOfTargetWeek, 6);

      whereClause = {
        createdAt: {
          gte: new Date(startOfTargetWeek.toISOString()),
          lte: new Date(endOfTargetWeek.toISOString()),
        },
      };
    }

    const DailyLotteryResults = await this.prisma.dailyResult.findMany({
      where: whereClause,
      include: { results: true },
      orderBy: {
        createdAt: "asc",
      },
    });

    const blockSize = 6;
    const totalResults = DailyLotteryResults.length;
    const startIndex = totalResults - (totalResults % blockSize || blockSize);
    let limitedResults = DailyLotteryResults.slice(startIndex, startIndex + blockSize);

    return limitedResults.map((dailyLotteryResult) =>
      DailyLotteryResult.create({
        id: dailyLotteryResult.id,
        date: dailyLotteryResult.date,
        formatedDate: dailyLotteryResult.formatedDate,
        results: dailyLotteryResult.results.map((result) =>
          LotteryResult.create({
            id: result.id,
            name: result.name,
            hour: result.startHour,
            videoURL: result.videoURL,
            number_1: result.number_1,
            number_2: result.number_2,
            number_3: result.number_3,
            number_4: result.number_4,
            number_5: result.number_5,
            createdAt: result.createdAt,
          })
        ),
      })
    );
  }

  async getByDate(date: string): Promise<DailyLotteryResult | null> {
    const data = await this.prisma.dailyResult.findUnique({
      where: { date: new Date(date) },
      include: { results: true },
    });

    if (!data) return null;

    return DailyLotteryResult.create({
      id: data.id,
      date: data.date,
      formatedDate: data.formatedDate,
      results: data.results.map((result) =>
        LotteryResult.create({
          id: result.id,
          name: result.name,
          hour: result.startHour,
          number_1: result.number_1,
          number_2: result.number_2,
          number_3: result.number_3,
          number_4: result.number_4,
          number_5: result.number_5,
          videoURL: result.videoURL,
        })
      ),
    });
  }

  async getById(id: string): Promise<DailyLotteryResult | null> {
    const dailyLotteryResult = await this.prisma.dailyResult.findUnique({
      where: { id },
      include: { results: true },
    });
    if (!dailyLotteryResult) return null;

    return DailyLotteryResult.create({
      id: dailyLotteryResult.id,
      date: dailyLotteryResult.date,
      formatedDate: dailyLotteryResult.formatedDate,
      results: dailyLotteryResult.results.map((result) =>
        LotteryResult.create({
          id: result.id,
          name: result.name,
          hour: result.startHour,
          dailyId: dailyLotteryResult.id,
          videoURL: result.videoURL,
          number_1: result.number_1,
          number_2: result.number_2,
          number_3: result.number_3,
          number_4: result.number_4,
          number_5: result.number_5,
          createdAt: result.createdAt,
        })
      ),
    });
  }
}
