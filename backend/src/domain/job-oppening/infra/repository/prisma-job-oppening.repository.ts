import { PaginationParams } from "../../../../core/@types/pagination-params";
import { prisma } from "../../../../main/config/prisma";
import { IJobOppeningRepository } from "../../application/interfaces/job-oppening.repository";
import { JobOppening } from "../../enterprise/entities/job-oppening";
import { JobOppeningMapper } from "../mappers/job-oppening.mapper";

export class PrismaJobOppeningRepository implements IJobOppeningRepository {
  async create(jobOppening: JobOppening): Promise<void> {
    await prisma.jobOppening.create({
      data: JobOppeningMapper.toPersistence(jobOppening),
    });
  }

  async save(jobOppening: JobOppening): Promise<void> {
    await prisma.jobOppening.update({
      where: { id: jobOppening.id },
      data: JobOppeningMapper.toPersistence(jobOppening),
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.jobOppening.delete({
      where: { id },
    });
  }

  async getById(id: string): Promise<JobOppening | null> {
    try {
      const jobOppening = await prisma.jobOppening.findUnique({
        where: { 
          id: id
         },
      });
  
      if (!jobOppening) return null;
  
      return JobOppeningMapper.toDomain(jobOppening);
      
    } catch (error) {
      console.log(error)
      return null
    }
  }

  async fetchMany(params?: PaginationParams): Promise<JobOppening[]> {
    const jobOppenings = await prisma.jobOppening.findMany({
      where: params?.slug ? { slug: params.slug } : undefined,
      skip: params?.page,
      take: params?.limit,
      orderBy: {
        createdAt: "desc",
      },
    });

    return jobOppenings.map((jobs) => JobOppeningMapper.toDomain(jobs));
  }

  async countAll(params?:PaginationParams): Promise<number> {
    return prisma.jobOppening.count({
      where: params ? { slug:params?.slug } : undefined
    });
  }
}
