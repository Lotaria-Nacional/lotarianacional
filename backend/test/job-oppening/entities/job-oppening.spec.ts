import { faker } from "@faker-js/faker"
import { JobOppening } from "../../../src/domain/job-oppening/enterprise/entities/job-oppening";

describe("Create Job Oppening", ()=> {
    it("should create a job oppening", ()=>{ 

        const jobOppening = JobOppening.create({
            title:"Chefe adjunto de sorteio",
            department:"t.i",
            requirements:[""],
            responsabilities:[""],
            quantity:0,

            description:faker.lorem.text(),
        })

        expect(jobOppening.slug).toBe("chefe-adjunto-de-sorteio")
        expect(jobOppening.department).toBe("T.I")
    })
})