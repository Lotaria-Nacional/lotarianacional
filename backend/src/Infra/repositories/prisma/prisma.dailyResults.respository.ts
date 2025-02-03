import { prisma } from "../../Database/prisma";
import { startOfWeek, addDays } from "date-fns";
import { Result } from "../../../Domain/Entities/Result/Result";
import { NotFoundError } from "../../../shared/errors/notFound.error";
import { DailyResult } from "../../../Domain/Entities/dailyResults/dailyResult";
import { IDailyResultRespository } from "../../../Domain/Entities/dailyResults/dailyResult.repository";

export class PrismaDailyResultsRespository implements IDailyResultRespository {
  async getAll(): Promise<DailyResult[]> {
    const dailyResults = await prisma.dailyResult.findMany({
      orderBy: {
        createdAt: "asc",
      },
      include: { results: true },
    });
    console.log(dailyResults);

    return dailyResults.map((dailyResult) =>
      DailyResult.create({
        id: dailyResult.id,
        date: dailyResult.date,
        createdAt: dailyResult.createdAt,
        formatedDate: dailyResult.formatedDate,
        results: dailyResult.results.map((result) =>
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
            createdAt: result.createdAt,
          })
        ),
      })
    );
  }
  async getLast(): Promise<DailyResult | null> {
    const lastDailyResult = await prisma.dailyResult.findFirst({
      orderBy: {
        createdAt: "desc",
      },
      include: { results: true },
    });

    if (!lastDailyResult) return null;

    return DailyResult.create({
      id: lastDailyResult.id,
      date: lastDailyResult.date,
      formatedDate: lastDailyResult.formatedDate,
      results: lastDailyResult.results.map((result) =>
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
          createdAt: result.createdAt,
        })
      ),
    });
  }

  async getAllWithFilter(date?: string): Promise<DailyResult[]> {
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

    const dailyResults = await prisma.dailyResult.findMany({
      where: whereClause,
      include: { results: true },
      orderBy: {
        createdAt: "asc",
      },
    });

    const blockSize = 6;
    const totalResults = dailyResults.length;
    // const startIndex = totalResults - Math.max(totalResults - blockSize, 0);
    const startIndex = totalResults - (totalResults % blockSize || blockSize);
    let limitedResults = dailyResults.slice(startIndex, startIndex + blockSize);

    return limitedResults.map((dailyResult) =>
      DailyResult.create({
        id: dailyResult.id,
        date: dailyResult.date,
        formatedDate: dailyResult.formatedDate,
        results: dailyResult.results.map((result) =>
          Result.create({
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
  async save(dailyResult: DailyResult): Promise<void> {
    await prisma.dailyResult.create({
      data: {
        date: dailyResult.date!,
        formatedDate: dailyResult.formatedDate,
        results: {
          create: dailyResult.results.map((result) => ({
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
  async update(dailyResult: DailyResult): Promise<void> {
    const exisitingDailyResult = await prisma.dailyResult.findUnique({
      where: { date: dailyResult.date },
      include: { results: true },
    });
    if (!exisitingDailyResult) throw new NotFoundError("Resultado diário não encontrado.");

    const lastResultAdded = dailyResult.results[dailyResult.results.length - 1];
    const newResult = await prisma.result.create({
      data: {
        dailyId: exisitingDailyResult.id,
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

    exisitingDailyResult.results.push(newResult);

    await prisma.dailyResult.update({
      where: { id: exisitingDailyResult.id },
      data: {
        results: {
          connect: { id: newResult.id },
        },
      },
    });
  }
  async getByDate(date: string): Promise<DailyResult | null> {
    const data = await prisma.dailyResult.findUnique({
      where: { date: new Date(date) },
      include: { results: true },
    });

    if (!data) return null;

    return DailyResult.create({
      id: data.id,
      date: data.date,
      formatedDate: data.formatedDate,
      results: data.results.map((result) =>
        Result.create({
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
  async delete(id: string): Promise<void> {
    await prisma.result.deleteMany({
      where: { dailyId: id }, // Filtra pelo ID do DailyResult
    });

    // Exclui o dailyResult
    await prisma.dailyResult.delete({
      where: { id },
    });
  }
  async getById(id: string): Promise<DailyResult | null> {
    const dailyResult = await prisma.dailyResult.findUnique({
      where: { id },
      include: { results: true },
    });
    if (!dailyResult) return null;

    return DailyResult.create({
      id: dailyResult.id,
      date: dailyResult.date,
      formatedDate: dailyResult.formatedDate,
      results: dailyResult.results.map((result) =>
        Result.create({
          id: result.id,
          name: result.name,
          hour: result.startHour,
          dailyId: dailyResult.id,
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
