import {
  UpdateResult,
  IResultRepository,
} from "../../../Domain/Entities/Result/result.respository"
import { prisma } from "../../Database/prisma"
import { Result } from "../../../Domain/Entities/Result/Result"

export class PrismaResultRespository implements IResultRepository {
  async update(data: UpdateResult): Promise<Result | null> {
    const updatedResult = await prisma.result.update({
      where: { id: data.id },
      data: {
        number_1: data.number_1,
        number_2: data.number_2,
        number_3: data.number_3,
        number_4: data.number_4,
        number_5: data.number_5,
      },
    })

    return Result.create({
      id: updatedResult.id,
      name: updatedResult.name,
      hour: updatedResult.startHour,
      number_1: updatedResult.number_1,
      number_2: updatedResult.number_2,
      number_3: updatedResult.number_3,
      number_4: updatedResult.number_4,
      number_5: updatedResult.number_5,
      createdAt: updatedResult.createdAt,
    })
  }

  async getById(id: string): Promise<Result | null> {
    const result = await prisma.result.findUnique({ where: { id } })
    if (!result) return null
    return Result.create({
      id: result.id,
      name: result?.name,
      hour: result?.startHour,
      number_1: result.number_1,
      number_2: result.number_2,
      number_3: result.number_3,
      number_4: result.number_4,
      number_5: result.number_5,
      createdAt: result.createdAt,
    })
  }

  async delete(id: string): Promise<void> {
    await prisma.result.delete({ where: { id } })
  }
}
