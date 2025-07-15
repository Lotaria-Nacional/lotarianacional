"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const in_memory_job_oppening_repository_1 = require("../infra/in-memory-job-oppening.repository");
const job_oppening_1 = require("../../../src/domain/job-oppening/enterprise/entities/job-oppening");
const fetch_many_job_oppenings_useCase_1 = require("../../../src/domain/job-oppening/application/use-cases/job-oppening/fetch-many-job-oppenings.useCase");
let repository;
let sut;
describe("Fetch Many Job Oppenings Use Case", () => {
    beforeEach(() => {
        repository = new in_memory_job_oppening_repository_1.InMemoryJobOppeningRepository();
        sut = new fetch_many_job_oppenings_useCase_1.FetchManyJobOppeningsUseCase(repository);
    });
    it("should fetch many job oppening", async () => {
        let jobOppening;
        for (let i = 1; i <= 4; i++) {
            jobOppening = job_oppening_1.JobOppening.create({
                title: faker_1.faker.lorem.sentence(2),
                quantity: 1,
                department: faker_1.faker.lorem.sentence(2),
                requirements: [faker_1.faker.lorem.sentence(2), faker_1.faker.lorem.sentence(2)],
                responsabilities: [faker_1.faker.lorem.sentence(2), faker_1.faker.lorem.sentence(2)],
                description: faker_1.faker.lorem.sentences(2)
            });
            await repository.create(jobOppening);
        }
        await sut.execute({});
        expect(repository.items).toHaveLength(4);
    });
    it("should fetch many job oppening paginated", async () => {
        let jobOppening;
        for (let i = 1; i < 25; i++) {
            jobOppening = job_oppening_1.JobOppening.create({
                title: faker_1.faker.lorem.sentence(2),
                quantity: 1,
                department: faker_1.faker.lorem.sentence(2),
                requirements: [faker_1.faker.lorem.sentence(2), faker_1.faker.lorem.sentence(2)],
                responsabilities: [faker_1.faker.lorem.sentence(2), faker_1.faker.lorem.sentence(2)],
                description: faker_1.faker.lorem.sentences(2)
            });
            await repository.create(jobOppening);
        }
    });
});
//# sourceMappingURL=fetch-many-job-oppenings.spec.js.map