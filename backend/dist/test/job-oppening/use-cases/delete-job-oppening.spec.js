"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const in_memory_job_oppening_repository_1 = require("../infra/in-memory-job-oppening.repository");
const job_oppening_1 = require("../../../src/domain/job-oppening/enterprise/entities/job-oppening");
const delete_job_oppening_useCase_1 = require("../../../src/domain/job-oppening/application/use-cases/job-oppening/delete-job-oppening.useCase");
let repository;
let sut;
describe("Delete Job Oppening Use Case", () => {
    beforeEach(() => {
        repository = new in_memory_job_oppening_repository_1.InMemoryJobOppeningRepository();
        sut = new delete_job_oppening_useCase_1.DeleteJobOppeningUseCase(repository);
    });
    it("should delete an existing job oppening", async () => {
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
        expect(repository.items).toHaveLength(0);
    });
});
//# sourceMappingURL=delete-job-oppening.spec.js.map