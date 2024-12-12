"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaDailyResultsRespository = void 0;
const prisma_1 = require("../../database/prisma");
const result_1 = require("../../../domain/entities/result/result");
const notFound_error_1 = require("../../../shared/errors/notFound.error");
const dailyResult_1 = require("../../../domain/entities/dailyResults/dailyResult");
class PrismaDailyResultsRespository {
    async getAll() {
        const dailyResults = await prisma_1.prisma.dailyResult.findMany({
            include: { results: true },
            orderBy: {
                date: "asc",
            },
        });
        return dailyResults.map((dailyResult) => dailyResult_1.DailyResult.create({
            id: dailyResult.id,
            date: dailyResult.date.toString(),
            results: dailyResult.results.map((result) => result_1.Result.create({
                id: result.id,
                name: result.name,
                hour: result.startHour,
                number_1: result.number_1,
                number_2: result.number_2,
                number_3: result.number_3,
                number_4: result.number_4,
                number_5: result.number_5,
                createdAt: result.createdAt,
            })),
        }));
    }
    async save(dailyResult) {
        await prisma_1.prisma.dailyResult.create({
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
        });
    }
    async update(dailyResult) {
        const exisitingDailyResult = await prisma_1.prisma.dailyResult.findUnique({
            where: { date: new Date(dailyResult.date) },
            include: { results: true },
        });
        if (!exisitingDailyResult)
            throw new notFound_error_1.NotFoundError("Resultado diário não encontrado.");
        const lastResultAdded = dailyResult.results[dailyResult.results.length - 1];
        const newResult = await prisma_1.prisma.result.create({
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
        });
        exisitingDailyResult.results.push(newResult);
        await prisma_1.prisma.dailyResult.update({
            where: { id: exisitingDailyResult.id },
            data: {
                results: {
                    connect: { id: newResult.id },
                },
            },
        });
    }
    async getByDate(date) {
        const data = await prisma_1.prisma.dailyResult.findUnique({
            where: { date: new Date(date) },
            include: { results: true },
        });
        if (!data)
            return null;
        return dailyResult_1.DailyResult.create({
            id: data.id,
            date: data.date.toString(),
            results: data.results.map((result) => result_1.Result.create({
                id: result.id,
                name: result.name,
                hour: result.startHour,
                number_1: result.number_1,
                number_2: result.number_2,
                number_3: result.number_3,
                number_4: result.number_4,
                number_5: result.number_5,
            })),
        });
    }
}
exports.PrismaDailyResultsRespository = PrismaDailyResultsRespository;
