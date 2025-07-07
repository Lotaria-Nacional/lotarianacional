import { faker } from "@faker-js/faker"
import { InMemoryJobOppeningRepository } from "../infra/in-memory-job-oppening.repository"
import { JobOppening } from "../../../src/domain/job-oppening/enterprise/entities/job-oppening"
import { CreateJobOppeningDTO } from "../../../src/domain/job-oppening/presentation/validation/create-job-oppening.schema"
import { CreateJobOppeningUseCase } from "../../../src/domain/job-oppening/application/use-cases/create-job-oppening.useCase"

let repository:InMemoryJobOppeningRepository
let sut:CreateJobOppeningUseCase

describe("Create Job Oppening Use Case", ()=> {
     beforeEach(()=>{
        repository = new InMemoryJobOppeningRepository()
        sut = new CreateJobOppeningUseCase(repository)
     })   

    it("should create a job oppening",async ()=>{
        
        const jobOppening:CreateJobOppeningDTO = {
            title:"Apresentadora de sorteio",
            department:"Sorteio",
            requirements:["1'75cm de altura", "boa dicção", "confortável a frente das câmeras"],
            responsabilities:["fazer o sorteio dos resultados"],
            description:faker.lorem.sentences(2)
        }

        await sut.execute(jobOppening)

        expect(repository.items).toHaveLength(1)
        expect(repository.items[0]).toBeInstanceOf(JobOppening)
        expect(repository.items[0].slug).toBe("apresentadora-de-sorteio")
        expect(repository.items[0].createdAt).toBeDefined()        
    })
})