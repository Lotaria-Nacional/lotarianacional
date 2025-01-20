"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaDailyResultsRespository = void 0;
const prisma_1 = require("../../Database/prisma");
const date_fns_1 = require("date-fns");
const Result_1 = require("../../../Domain/Entities/Result/Result");
const notFound_error_1 = require("../../../shared/errors/notFound.error");
const dailyResult_1 = require("../../../Domain/Entities/dailyResults/dailyResult");
class PrismaDailyResultsRespository {
    async getAll() {
        const dailyResults = await prisma_1.prisma.dailyResult.findMany({
            orderBy: {
                createdAt: "asc",
            },
            include: { results: true },
        });
        return dailyResults.map((dailyResult) => dailyResult_1.DailyResult.create({
            id: dailyResult.id,
            date: dailyResult.date,
            createdAt: dailyResult.createdAt,
            formatedDate: dailyResult.formatedDate,
            results: dailyResult.results.map((result) => Result_1.Result.create({
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
            })),
        }));
    }
    async getLast() {
        const lastDailyResult = await prisma_1.prisma.dailyResult.findFirst({
            orderBy: {
                createdAt: "desc",
            },
            include: { results: true },
        });
        if (!lastDailyResult)
            return null;
        return dailyResult_1.DailyResult.create({
            id: lastDailyResult.id,
            date: lastDailyResult.date,
            formatedDate: lastDailyResult.formatedDate,
            results: lastDailyResult.results.map((result) => Result_1.Result.create({
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
            })),
        });
    }
    async getAllWithFilter(date) {
        let whereClause = {};
        if (date) {
            const targetDate = new Date(date);
            const startOfTargetWeek = (0, date_fns_1.startOfWeek)(targetDate, { weekStartsOn: 1 });
            const endOfTargetWeek = (0, date_fns_1.addDays)(startOfTargetWeek, 5);
            whereClause = {
                createdAt: {
                    $gte: startOfTargetWeek,
                    $lte: endOfTargetWeek,
                },
            };
        }
        const dailyResults = await prisma_1.prisma.dailyResult.findMany({
            where: whereClause,
            include: { results: true },
            orderBy: {
                createdAt: "asc",
            },
        });
        const blockSize = 7;
        const totalResults = dailyResults.length;
        const startIndex = totalResults - (totalResults % blockSize || blockSize);
        let limitedResults = dailyResults.slice(startIndex, startIndex + blockSize);
        return limitedResults.map((dailyResult) => dailyResult_1.DailyResult.create({
            id: dailyResult.id,
            date: dailyResult.date,
            formatedDate: dailyResult.formatedDate,
            results: dailyResult.results.map((result) => Result_1.Result.create({
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
            })),
        }));
    }
    async save(dailyResult) {
        await prisma_1.prisma.dailyResult.create({
            data: {
                date: dailyResult.date,
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
    async update(dailyResult) {
        const exisitingDailyResult = await prisma_1.prisma.dailyResult.findUnique({
            where: { date: dailyResult.date },
            include: { results: true },
        });
        if (!exisitingDailyResult)
            throw new notFound_error_1.NotFoundError("Resultado diário não encontrado.");
        const lastResultAdded = dailyResult.results[dailyResult.results.length - 1];
        const newResult = await prisma_1.prisma.result.create({
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
            date: data.date,
            formatedDate: data.formatedDate,
            results: data.results.map((result) => Result_1.Result.create({
                id: result.id,
                name: result.name,
                hour: result.startHour,
                number_1: result.number_1,
                number_2: result.number_2,
                number_3: result.number_3,
                number_4: result.number_4,
                number_5: result.number_5,
                videoURL: result.videoURL,
            })),
        });
    }
    async delete(id) {
        await prisma_1.prisma.result.deleteMany({
            where: { dailyId: id }, // Filtra pelo ID do DailyResult
        });
        // Exclui o dailyResult
        await prisma_1.prisma.dailyResult.delete({
            where: { id },
        });
    }
    async getById(id) {
        const dailyResult = await prisma_1.prisma.dailyResult.findUnique({
            where: { id },
            include: { results: true },
        });
        if (!dailyResult)
            return null;
        return dailyResult_1.DailyResult.create({
            id: dailyResult.id,
            date: dailyResult.date,
            formatedDate: dailyResult.formatedDate,
            results: dailyResult.results.map((result) => Result_1.Result.create({
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
            })),
        });
    }
}
exports.PrismaDailyResultsRespository = PrismaDailyResultsRespository;
