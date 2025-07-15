"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const job_oppening_1 = require("../../../src/domain/job-oppening/enterprise/entities/job-oppening");
describe("Create Job Oppening", () => {
    it("should create a job oppening", () => {
        const jobOppening = job_oppening_1.JobOppening.create({
            title: "Chefe adjunto de sorteio",
            department: "t.i",
            requirements: [""],
            responsabilities: [""],
            quantity: 0,
            description: faker_1.faker.lorem.text(),
        });
        expect(jobOppening.slug).toBe("chefe-adjunto-de-sorteio");
        expect(jobOppening.department).toBe("T.I");
    });
});
//# sourceMappingURL=job-oppening.spec.js.map