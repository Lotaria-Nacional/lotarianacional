import { faker } from "@faker-js/faker"
import { InMemoryJobOppeningRepository } from "../infra/in-memory-job-oppening.repository"
import { JobOppening } from "../../../src/domain/job-oppening/enterprise/entities/job-oppening"
import { FetchManyJobOppeningsUseCase } from "../../../src/domain/job-oppening/application/use-cases/job-oppening/fetch-many-job-oppenings.useCase"

let repository:InMemoryJobOppeningRepository
let sut:FetchManyJobOppeningsUseCase

describe("Fetch Many Job Oppenings Use Case", ()=> {
     beforeEach(()=>{
        repository = new InMemoryJobOppeningRepository()
        sut = new FetchManyJobOppeningsUseCase(repository)
     })   

    it("should fetch many job oppening",async ()=>{
        let jobOppening:JobOppening
        for(let i = 1; i <= 4; i++){
            jobOppening = JobOppening.create({
                title:faker.lorem.sentence(2),
                quantity:1,
                department:faker.lorem.sentence(2),
                requirements:[faker.lorem.sentence(2),faker.lorem.sentence(2)],
                responsabilities:[faker.lorem.sentence(2),faker.lorem.sentence(2)],
                description:faker.lorem.sentences(2)
            })
            await repository.create(jobOppening)
        }


        await sut.execute({})

        expect(repository.items).toHaveLength(4)
    })

    it("should fetch many job oppening paginated",async ()=>{
        let jobOppening:JobOppening

        for(let i = 1; i < 25; i++){
            jobOppening = JobOppening.create({
                title:faker.lorem.sentence(2),
                quantity:1,
                department:faker.lorem.sentence(2),
                requirements:[faker.lorem.sentence(2),faker.lorem.sentence(2)],
                responsabilities:[faker.lorem.sentence(2),faker.lorem.sentence(2)],
                description:faker.lorem.sentences(2)
            })
            await repository.create(jobOppening)
        }

    })
})