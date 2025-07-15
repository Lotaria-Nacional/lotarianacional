"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const in_memory_job_oppening_repository_1 = require("../infra/in-memory-job-oppening.repository");
const job_oppening_1 = require("../../../src/domain/job-oppening/enterprise/entities/job-oppening");
const create_job_oppening_useCase_1 = require("../../../src/domain/job-oppening/application/use-cases/job-oppening/create-job-oppening.useCase");
let repository;
let sut;
describe("Create Job Oppening Use Case", () => {
    beforeEach(() => {
        repository = new in_memory_job_oppening_repository_1.InMemoryJobOppeningRepository();
        sut = new create_job_oppening_useCase_1.CreateJobOppeningUseCase(repository);
    });
    it("should create a job oppening", async () => {
        const jobOppening = {
            title: "Apresentadora de sorteio",
            department: "Sorteio",
            quantity: 0,
            requirements: ["1'75cm de altura", "boa dicção", "confortável a frente das câmeras"],
            responsabilities: ["fazer o sorteio dos resultados"],
            description: faker_1.faker.lorem.sentences(2)
        };
        await sut.execute(jobOppening);
        expect(repository.items).toHaveLength(1);
        expect(repository.items[0]).toBeInstanceOf(job_oppening_1.JobOppening);
        expect(repository.items[0].slug).toBe("apresentadora-de-sorteio");
        expect(repository.items[0].createdAt).toBeDefined();
    });
});
//# sourceMappingURL=create-job-oppening.spec.js.map