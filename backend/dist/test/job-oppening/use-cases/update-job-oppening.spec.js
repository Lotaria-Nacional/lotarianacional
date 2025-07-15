"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const in_memory_job_oppening_repository_1 = require("../infra/in-memory-job-oppening.repository");
const job_oppening_1 = require("../../../src/domain/job-oppening/enterprise/entities/job-oppening");
const update_job_oppening_useCase_1 = require("../../../src/domain/job-oppening/application/use-cases/job-oppening/update-job-oppening.useCase");
let repository;
let sut;
describe("Update Job Oppening Use Case", () => {
    beforeEach(() => {
        repository = new in_memory_job_oppening_repository_1.InMemoryJobOppeningRepository();
        sut = new update_job_oppening_useCase_1.UpdateJobOppeningUseCase(repository);
    });
    it("should update an existing job oppening", async () => {
        const jobOppening = job_oppening_1.JobOppening.create({
            title: "Apresentadora de sorteio",
            department: "Sorteio",
            quantity: 1,
            requirements: ["1'75cm de altura", "boa dicção", "confortável a frente das câmeras"],
            responsabilities: ["fazer o sorteio dos resultados"],
            description: faker_1.faker.lorem.sentences(2)
        });
        await repository.create(jobOppening);
        const updatedJobOppening = {
            id: jobOppening.id,
            title: "Adjunto de logística",
            department: "Logística"
        };
        await sut.execute(updatedJobOppening);
        expect(repository.items).toHaveLength(1);
        expect(repository.items[0]).toBeInstanceOf(job_oppening_1.JobOppening);
        expect(repository.items[0].slug).toBe("adjunto-de-logistica");
        expect(repository.items[0].title).toBe("Adjunto de logística");
        expect(repository.items[0].department).toBe("LOGÍSTICA");
        expect(repository.items[0].createdAt).toBeDefined();
    });
});
//# sourceMappingURL=update-job-oppening.spec.js.map