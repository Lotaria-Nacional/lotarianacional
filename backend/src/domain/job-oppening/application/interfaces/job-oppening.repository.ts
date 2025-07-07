import { PaginationParams } from "../../../../core/@types/pagination-params"
import { JobOppening } from "../../enterprise/entities/job-oppening"

export interface IJobOppeningRepository {
    create(jobOppening:JobOppening):Promise<void>
    save(jobOppening:JobOppening):Promise<void>
    delete(id:string):Promise<void>
    getById(slug:string):Promise<JobOppening | null>
    fetchMany(params?:PaginationParams):Promise<JobOppening[]>
    countAll():Promise<number>
}