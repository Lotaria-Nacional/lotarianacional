import { faker } from "@faker-js/faker"
import { InMemoryJobOppeningRepository } from "../infra/in-memory-job-oppening.repository"
import { JobOppening } from "../../../src/domain/job-oppening/enterprise/entities/job-oppening"
import { UpdateJobOppeningDTO } from "../../../src/domain/job-oppening/presentation/validation/update-job-oppening.schema"
import { UpdateJobOppeningUseCase } from "../../../src/domain/job-oppening/application/use-cases/job-oppening/update-job-oppening.useCase"

let repository:InMemoryJobOppeningRepository
let sut:UpdateJobOppeningUseCase

describe("Update Job Oppening Use Case", ()=> {
     beforeEach(()=>{
        repository = new InMemoryJobOppeningRepository()
        sut = new UpdateJobOppeningUseCase(repository)
     })   

    it("should update an existing job oppening",async ()=>{
        
        const jobOppening = JobOppening.create({
            title:"Apresentadora de sorteio",
            department:"Sorteio",
            quantity:1,
            requirements:["1'75cm de altura", "boa dicção", "confortável a frente das câmeras"],
            responsabilities:["fazer o sorteio dos resultados"],
            description:faker.lorem.sentences(2)
        })

        await repository.create(jobOppening)
        
        const updatedJobOppening:UpdateJobOppeningDTO = {
            id:jobOppening.id,
            title:"Adjunto de logística",
            department:"Logística"
        }

        await sut.execute(updatedJobOppening)

        expect(repository.items).toHaveLength(1)
        expect(repository.items[0]).toBeInstanceOf(JobOppening)
        expect(repository.items[0].slug).toBe("adjunto-de-logistica")
        expect(repository.items[0].title).toBe("Adjunto de logística")
        expect(repository.items[0].department).toBe("LOGÍSTICA")
        expect(repository.items[0].createdAt).toBeDefined()   
    })
})