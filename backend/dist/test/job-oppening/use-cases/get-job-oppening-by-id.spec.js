"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const in_memory_job_oppening_repository_1 = require("../infra/in-memory-job-oppening.repository");
const job_oppening_1 = require("../../../src/domain/job-oppening/enterprise/entities/job-oppening");
const get_job_oppening_by_id_useCase_1 = require("../../../src/domain/job-oppening/application/use-cases/job-oppening/get-job-oppening-by-id.useCase");
let repository;
let sut;
describe("Get Job Oppening By Id Use Case", () => {
    beforeEach(() => {
        repository = new in_memory_job_oppening_repository_1.InMemoryJobOppeningRepository();
        sut = new get_job_oppening_by_id_useCase_1.GetJobOppeningByIdUseCase(repository);
    });
    it("should get an existing job oppening by id", async () => {
        const jobOppening = job_oppening_1.JobOppening.create({
            title: "Apresentadora de sorteio",
            department: "Sorteio",
            quantity: 1,
            requirements: ["1'75cm de altura", "boa dicção", "confortável a frente das câmeras"],
            responsabilities: ["fazer o sorteio dos resultados"],
            description: faker_1.faker.lorem.sentences(2)
        });
        await repository.create(jobOppening);
        await sut.execute(jobOppening.id);
        expect(repository.items[0].id).toBe(jobOppening.id);
        expect(repository.items[0].title).toBe("Apresentadora de sorteio");
    });
});
//# sourceMappingURL=get-job-oppening-by-id.spec.js.map