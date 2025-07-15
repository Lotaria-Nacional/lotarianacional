import { faker } from "@faker-js/faker"
import { InMemoryJobOppeningRepository } from "../infra/in-memory-job-oppening.repository"
import { JobOppening } from "../../../src/domain/job-oppening/enterprise/entities/job-oppening"
import { GetJobOppeningByIdUseCase } from "../../../src/domain/job-oppening/application/use-cases/job-oppening/get-job-oppening-by-id.useCase"

let repository:InMemoryJobOppeningRepository
let sut:GetJobOppeningByIdUseCase

describe("Get Job Oppening By Id Use Case", ()=> {
     beforeEach(()=>{
        repository = new InMemoryJobOppeningRepository()
        sut = new GetJobOppeningByIdUseCase(repository)
     })   

    it("should get an existing job oppening by id",async ()=>{

        const jobOppening = JobOppening.create({
            title:"Apresentadora de sorteio",
            department:"Sorteio",
            quantity:1,
            requirements:["1'75cm de altura", "boa dicção", "confortável a frente das câmeras"],
            responsabilities:["fazer o sorteio dos resultados"],
            description:faker.lorem.sentences(2)
        })

        await repository.create(jobOppening)

        await sut.execute(jobOppening.id)

        expect(repository.items[0].id).toBe(jobOppening.id)
        expect(repository.items[0].title).toBe("Apresentadora de sorteio")
    })
})