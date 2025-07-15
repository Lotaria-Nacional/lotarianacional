"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaLotteryResultRespository = void 0;
const lottery_result_1 = require("../../../../../domain/daily-lottery-result/enterprise/entities/lottery-result");
class PrismaLotteryResultRespository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async save(result) {
        await this.prisma.result.create({
            data: {
                name: result.name,
                videoURL: result.videoURL ?? null,
                startHour: result.hour,
                dailyId: result.dailyId,
                number_1: result.number_1,
                number_2: result.number_2,
                number_3: result.number_3,
                number_4: result.number_4,
                number_5: result.number_5,
            },
        });
    }
    async getAll() {
        const results = await this.prisma.result.findMany({
            orderBy: { createdAt: "desc" },
        });
        return results.map((result) => lottery_result_1.LotteryResult.create({
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
        }));
    }
    async update(data) {
        const updatedResult = await this.prisma.result.update({
            where: { id: data.id },
            data: {
                videoURL: data.videoURL ?? null,
            },
        });
        return lottery_result_1.LotteryResult.create({
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
    async getById(id) {
        const result = await this.prisma.result.findUnique({ where: { id } });
        if (!result)
            return null;
        return lottery_result_1.LotteryResult.create({
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
    async delete(id) {
        await this.prisma.result.delete({ where: { id } });
    }
}
exports.PrismaLotteryResultRespository = PrismaLotteryResultRespository;
//# sourceMappingURL=prisma.result.repository.js.map