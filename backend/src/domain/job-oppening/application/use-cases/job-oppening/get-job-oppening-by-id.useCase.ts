import { NotFoundError } from "../../../../../core/errors/common/not-found.error"
import { IJobOppeningRepository } from "../../interfaces/job-oppening.repository"

export class GetJobOppeningByIdUseCase {
    constructor(private repository:IJobOppeningRepository){}

    async execute(id:string) {
        const existingJobOppening = await this.repository.getById(id)

        if(!existingJobOppening){
            throw new NotFoundError("A vaga não foi encontrada")
        }

        return existingJobOppening

    }
}