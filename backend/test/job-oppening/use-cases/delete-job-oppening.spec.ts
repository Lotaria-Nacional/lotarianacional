import { faker } from "@faker-js/faker"
import { InMemoryJobOppeningRepository } from "../infra/in-memory-job-oppening.repository"
import { JobOppening } from "../../../src/domain/job-oppening/enterprise/entities/job-oppening"
import { DeleteJobOppeningUseCase } from "../../../src/domain/job-oppening/application/use-cases/job-oppening/delete-job-oppening.useCase"

let repository:InMemoryJobOppeningRepository
let sut:DeleteJobOppeningUseCase

describe("Delete Job Oppening Use Case", ()=> {
     beforeEach(()=>{
        repository = new InMemoryJobOppeningRepository()
        sut = new DeleteJobOppeningUseCase(repository)
     })   

    it("should delete an existing job oppening",async ()=>{
        
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
        expect(repository.items).toHaveLength(0)
    })
})