"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaPartnerJobOppeningRepository = void 0;
const prisma_1 = require("../../../../main/config/prisma");
const partner_job_oppening_mapper_1 = require("../mappers/partner-job-oppening.mapper");
class PrismaPartnerJobOppeningRepository {
    async create(partnerjobOppening) {
        await prisma_1.prisma.partnerjobOppening.create({
            data: partner_job_oppening_mapper_1.PartnerJobOppeningMapper.toPersistence(partnerjobOppening),
        });
    }
    async save(partnerjobOppening) {
        await prisma_1.prisma.partnerjobOppening.update({
            where: { id: partnerjobOppening.id },
            data: partner_job_oppening_mapper_1.PartnerJobOppeningMapper.toPersistence(partnerjobOppening),
        });
    }
    async delete(id) {
        await prisma_1.prisma.partnerjobOppening.delete({
            where: { id },
        });
    }
    async getById(id) {
        const PartnerjobOppening = await prisma_1.prisma.partnerjobOppening.findUnique({
            where: { id },
        });
        if (!PartnerjobOppening)
            return null;
        return partner_job_oppening_mapper_1.PartnerJobOppeningMapper.toDomain(PartnerjobOppening);
    }
    async fetchMany(params) {
        const partnerjobOppenings = await prisma_1.prisma.partnerjobOppening.findMany({
            where: params?.slug ? { slug: params.slug } : undefined,
            skip: params?.page,
            take: params?.limit,
            orderBy: {
                createdAt: "desc",
            },
        });
        return partnerjobOppenings.map((jobs) => partner_job_oppening_mapper_1.PartnerJobOppeningMapper.toDomain(jobs));
    }
    async countAll(params) {
        return prisma_1.prisma.partnerjobOppening.count({
            where: params?.slug ? { slug: params.slug } : undefined
        });
    }
}
exports.PrismaPartnerJobOppeningRepository = PrismaPartnerJobOppeningRepository;
//# sourceMappingURL=prisma-partner-job-oppening.repository.js.map