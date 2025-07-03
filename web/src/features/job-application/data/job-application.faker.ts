import { JobOppening } from "../@types/job-oppening.types";
import { faker } from "@faker-js/faker";

export const jobs:JobOppening[] = [
    {
        id:faker.number.int(),
        title:faker.lorem.word(5),
        department:faker.word.noun(),
        description:faker.lorem.paragraphs(15),
        requirements:[
            faker.lorem.lines(1),
            faker.lorem.lines(1),
            faker.lorem.lines(1),
        ],
        responsabilities:[],
        createdAt:faker.date.anytime()
    },
    {
        id:faker.number.int(),
        title:faker.lorem.word(5),
        department:faker.word.noun(),
        description:faker.lorem.paragraphs(15),
        requirements:[
            faker.lorem.lines(1),
            faker.lorem.lines(1),
            faker.lorem.lines(1),
        ],
        responsabilities:[],
        createdAt:faker.date.anytime()
    },
    {
        id:faker.number.int(),
        title:faker.lorem.word(5),
        department:faker.word.noun(),
        description:faker.lorem.paragraphs(15),
        requirements:[
            faker.lorem.lines(1),
            faker.lorem.lines(1),
            faker.lorem.lines(1),
        ],
        responsabilities:[],
        createdAt:faker.date.anytime()
    },
]