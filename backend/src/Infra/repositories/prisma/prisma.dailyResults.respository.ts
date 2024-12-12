import { prisma } from "../../Database/prisma"
import { Result } from "../../../Domain/Entities/Result/Result"
import { NotFoundError } from "../../../shared/errors/notFound.error"
import { DailyResult } from "../../../Domain/Entities/dailyResults/dailyResult"
import { IDailyResultRespository } from "../../../Domain/Entities/dailyResults/dailyResult.repository"

export class PrismaDailyResultsRespository implements IDailyResultRespository {
  async getAll(): Promise<DailyResult[]> {
    const dailyResults = await prisma.dailyResult.findMany({
      include: { results: true },
      orderBy: {
        date: "asc",
      },
    })

    return dailyResults.map((dailyResult) =>
      DailyResult.create({
        id: dailyResult.id,
        date: dailyResult.date.toString(),
        results: dailyResult.results.map((result) =>
          Result.create({
            id: result.id,
            name: result.name,
            hour: result.startHour,
            number_1: result.number_1,
            number_2: result.number_2,
            number_3: result.number_3,
            number_4: result.number_4,
            number_5: result.number_5,
            createdAt: result.createdAt,
          })
        ),
      })
    )
  }
  async save(dailyResult: DailyResult): Promise<void> {
    await prisma.dailyResult.create({
      data: {
        date: new Date(dailyResult.date),
        results: {
          create: dailyResult.results.map((result) => ({
            id: result.id,
            name: result.name,
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
    })
  }
  async update(dailyResult: DailyResult): Promise<void> {
    const exisitingDailyResult = await prisma.dailyResult.findUnique({
      where: { date: new Date(dailyResult.date) },
      include: { results: true },
    })
    if (!exisitingDailyResult)
      throw new NotFoundError("Resultado diário não encontrado.")

    const lastResultAdded = dailyResult.results[dailyResult.results.length - 1]
    const newResult = await prisma.result.create({
      data: {
        dailyId: exisitingDailyResult.id,
        name: lastResultAdded.name,
        startHour: lastResultAdded.hour,
        number_1: lastResultAdded.number_1,
        number_2: lastResultAdded.number_2,
        number_3: lastResultAdded.number_3,
        number_4: lastResultAdded.number_4,
        number_5: lastResultAdded.number_5,
        createdAt: lastResultAdded.createdAt,
      },
    })

    exisitingDailyResult.results.push(newResult)

    await prisma.dailyResult.update({
      where: { id: exisitingDailyResult.id },
      data: {
        results: {
          connect: { id: newResult.id },
        },
      },
    })
  }

  async getByDate(date: string): Promise<DailyResult | null> {
    const data = await prisma.dailyResult.findUnique({
      where: { date: new Date(date) },
      include: { results: true },
    })

    if (!data) return null

    return DailyResult.create({
      id: data.id,
      date: data.date.toString(),
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
        })
      ),
    })
  }
}
