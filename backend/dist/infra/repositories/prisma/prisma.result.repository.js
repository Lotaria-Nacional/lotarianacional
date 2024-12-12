"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaResultRespository = void 0;
const prisma_1 = require("../../database/prisma");
const result_1 = require("../../../domain/entities/result/result");
class PrismaResultRespository {
    async update(data) {
        const updatedResult = await prisma_1.prisma.result.update({
            where: { id: data.id },
            data: {
                number_1: data.number_1,
                number_2: data.number_2,
                number_3: data.number_3,
                number_4: data.number_4,
                number_5: data.number_5,
            },
        });
        return result_1.Result.create({
            id: updatedResult.id,
            name: updatedResult.name,
            hour: updatedResult.startHour,
            number_1: updatedResult.number_1,
            number_2: updatedResult.number_2,
            number_3: updatedResult.number_3,
            number_4: updatedResult.number_4,
            number_5: updatedResult.number_5,
            createdAt: updatedResult.createdAt,
        });
    }
    async getById(id) {
        const result = await prisma_1.prisma.result.findUnique({ where: { id } });
        if (!result)
            return null;
        return result_1.Result.create({
            id: result.id,
            name: result?.name,
            hour: result?.startHour,
            number_1: result.number_1,
            number_2: result.number_2,
            number_3: result.number_3,
            number_4: result.number_4,
            number_5: result.number_5,
            createdAt: result.createdAt,
        });
    }
    async delete(id) {
        await prisma_1.prisma.result.delete({ where: { id } });
    }
}
exports.PrismaResultRespository = PrismaResultRespository;
