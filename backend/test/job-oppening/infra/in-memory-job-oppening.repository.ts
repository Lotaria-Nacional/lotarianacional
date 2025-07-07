import { PaginationParams } from "../../../src/core/@types/pagination-params"
import { IJobOppeningRepository } from "../../../src/domain/job-oppening/application/interfaces/job-oppening.repository"
import { JobOppening } from "../../../src/domain/job-oppening/enterprise/entities/job-oppening"

export class InMemoryJobOppeningRepository implements IJobOppeningRepository {
    public items:JobOppening[] = []

    async create(jobOppening: JobOppening): Promise<void> {
        this.items.push(jobOppening)
    }

    async save(jobOppening: JobOppening): Promise<void> {
        const jobIndex = this.items.findIndex(job => job.id === jobOppening.id)
        
        if (jobIndex === -1) {
            throw new Error(`JobOppening with ID ${jobOppening.id} not found`);
        }

        this.items[jobIndex] = jobOppening
    }

    async delete(id: string): Promise<void> {
        const jobIndex = this.items.findIndex(job => job.id === id)
        this.items.splice(jobIndex, 1)
    }

    async fetchMany(params?: PaginationParams): Promise<JobOppening[]> {
        if (params?.limit !== undefined && params?.page !== undefined) {
          const end = params.page + params.limit;
          return this.items.slice(params.page, end);
        }
      
        return this.items;
      }
    
    async getById(id: string): Promise<JobOppening | null> {
        return this.items.find((job)=> job.id === id) ?? null
    }  

    async countAll() {
        return this.items.length
    }

}