"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaJobOppeningRepository = void 0;
const prisma_1 = require("../../../../main/config/prisma");
const job_oppening_mapper_1 = require("../mappers/job-oppening.mapper");
class PrismaJobOppeningRepository {
    async create(jobOppening) {
        await prisma_1.prisma.jobOppening.create({
            data: job_oppening_mapper_1.JobOppeningMapper.toPersistence(jobOppening),
        });
    }
    async save(jobOppening) {
        await prisma_1.prisma.jobOppening.update({
            where: { id: jobOppening.id },
            data: job_oppening_mapper_1.JobOppeningMapper.toPersistence(jobOppening),
        });
    }
    async delete(id) {
        await prisma_1.prisma.jobOppening.delete({
            where: { id },
        });
    }
    async getById(id) {
        try {
            const jobOppening = await prisma_1.prisma.jobOppening.findUnique({
                where: {
                    id: id
                },
            });
            if (!jobOppening)
                return null;
            return job_oppening_mapper_1.JobOppeningMapper.toDomain(jobOppening);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async fetchMany(params) {
        const jobOppenings = await prisma_1.prisma.jobOppening.findMany({
            where: params?.slug ? { slug: params.slug } : undefined,
            skip: params?.page,
            take: params?.limit,
            orderBy: {
                createdAt: "desc",
            },
        });
        return jobOppenings.map((jobs) => job_oppening_mapper_1.JobOppeningMapper.toDomain(jobs));
    }
    async countAll(params) {
        return prisma_1.prisma.jobOppening.count({
            where: params ? { slug: params?.slug } : undefined
        });
    }
}
exports.PrismaJobOppeningRepository = PrismaJobOppeningRepository;
//# sourceMappingURL=prisma-job-oppening.repository.js.map