import { IJobOppeningRepository } from "../interfaces/job-oppening.repository";
import { Either } from "../../../../core/either/either";
import { NotFoundError } from "../../../../core/errors/common/not-found.error";
import { left, right } from "../../../../core/either/helpers";

export type DeleteJobOppeningUseCaseResponse = Either<NotFoundError, {}>

export class DeleteJobOppeningUseCase {
    constructor(private repository:IJobOppeningRepository){}

    async execute(id:string):Promise<DeleteJobOppeningUseCaseResponse> {
        const existingJobOppening = await this.repository.getById(id)

        if(!existingJobOppening){
            return left(new NotFoundError("A vaga não foi encontrada"))
        }

        await this.repository.delete(existingJobOppening.id)

        return right({})
    }
}