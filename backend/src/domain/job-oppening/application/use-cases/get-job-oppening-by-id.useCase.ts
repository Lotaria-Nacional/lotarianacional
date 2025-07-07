import { IJobOppeningRepository } from "../interfaces/job-oppening.repository";
import { Either } from "../../../../core/either/either";
import { NotFoundError } from "../../../../core/errors/common/not-found.error";
import { left, right } from "../../../../core/either/helpers";
import { JobOppening } from "../../enterprise/entities/job-oppening";

export type GetJobOppeningByIdResponse = Either<NotFoundError, { jobOppening:JobOppening }>

export class GetJobOppeningByIdUseCase {
    constructor(private repository:IJobOppeningRepository){}

    async execute(id:string):Promise<GetJobOppeningByIdResponse> {
        const existingJobOppening = await this.repository.getById(id)

        if(!existingJobOppening){
            return left(new NotFoundError("A vaga não foi encontrada"))
        }

        await this.repository.getById(existingJobOppening.id)

        return right({
            jobOppening: existingJobOppening
        })
    }
}