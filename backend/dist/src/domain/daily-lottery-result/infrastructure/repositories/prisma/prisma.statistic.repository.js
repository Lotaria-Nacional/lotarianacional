"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaStatisticRepository = void 0;
const statistic_1 = require("../../../enterprise/entities/statistic");
class PrismaStatisticRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async save(statistic) {
        await this.prisma.statistics.create({
            data: {
                file: statistic.file,
                statsData: statistic.statsData,
                createdAt: statistic.createdAt,
            },
        });
    }
    async get() {
        const statistic = await this.prisma.statistics.findFirst({
            orderBy: { createdAt: "desc" },
        });
        if (!statistic)
            return null;
        return statistic_1.Statistic.create({
            id: statistic.id,
            file: statistic.file,
            statsData: statistic.statsData,
            createdAt: statistic.createdAt,
        });
    }
    async delete(id) {
        if (!id) {
            console.error("ID não fornecido para deletar a estatística.");
            throw new Error("ID é obrigatório para deletar a estatística.");
        }
        try {
            await this.prisma.statistics.delete({ where: { id } });
        }
        catch (error) {
            console.error(`Erro ao deletar a estatística com o ID: ${id}: `, error);
            throw error;
        }
    }
}
exports.PrismaStatisticRepository = PrismaStatisticRepository;
//# sourceMappingURL=prisma.statistic.repository.js.map