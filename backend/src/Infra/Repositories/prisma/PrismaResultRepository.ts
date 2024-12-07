import { prisma } from "../../Database/prisma"
import { Result } from "../../../Domain/Entities/Result/Result"
import { IResultRepository } from "../../../Domain/Entities/Result/IResultRespository"

export class PrismaResultRespository implements IResultRepository {
  async update(id: string, data: Partial<Result>): Promise<Result | null> {
    const updatedResult = await prisma.result.update({
      where: { id },
      data: {
        sorted_number_1: data.sorted_number_1,
        sorted_number_2: data.sorted_number_2,
        sorted_number_3: data.sorted_number_3,
        sorted_number_4: data.sorted_number_4,
        sorted_number_5: data.sorted_number_5,
      },
    })
    return Result.create({
      name: updatedResult.name,
      hour: updatedResult.hour,
      minute: updatedResult.minute,
      sorted_number_1: updatedResult.sorted_number_1,
      sorted_number_2: updatedResult.sorted_number_2,
      sorted_number_3: updatedResult.sorted_number_3,
      sorted_number_4: updatedResult.sorted_number_4,
      sorted_number_5: updatedResult.sorted_number_5,
    })
  }

  async getById(id: string): Promise<Result | null> {
    const result = await prisma.result.findUnique({ where: { id } })
    if (!result) return null
    return Result.create({
      hour: result?.hour,
      name: result?.name,
      minute: result?.minute,
      sorted_number_1: result?.sorted_number_1,
      sorted_number_2: result?.sorted_number_2,
      sorted_number_3: result?.sorted_number_3,
      sorted_number_4: result?.sorted_number_4,
      sorted_number_5: result?.sorted_number_5,
      createdAt: result.createdAt,
    })
  }
  async save(result: Result): Promise<void> {
    await prisma.result.create({
      data: {
        name: result.name,
        hour: result.hour,
        minute: result.minute,
        sorted_number_1: result.sorted_number_1,
        sorted_number_2: result.sorted_number_2,
        sorted_number_3: result.sorted_number_3,
        sorted_number_4: result.sorted_number_4,
        sorted_number_5: result.sorted_number_5,
        createdAt: result.createdAt,
      },
    })
  }

  async getAll(): Promise<Result[]> {
    const results = await prisma.result.findMany()
    if (results.length === 0) return []

    return results.map((result) =>
      Result.create({
        id: result.id,
        name: result.name,
        hour: result.hour,
        minute: result.minute,
        createdAt: result.createdAt,
        sorted_number_1: result.sorted_number_1,
        sorted_number_2: result.sorted_number_2,
        sorted_number_3: result.sorted_number_3,
        sorted_number_4: result.sorted_number_4,
        sorted_number_5: result.sorted_number_5,
      })
    )
  }

  async delete(id: string): Promise<void> {
    await prisma.result.delete({ where: { id } })
  }
}
