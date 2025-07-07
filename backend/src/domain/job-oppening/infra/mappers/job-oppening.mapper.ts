import { Prisma } from "@prisma/client";
import { JobOppening } from "../../enterprise/entities/job-oppening";


export class JobOppeningMapper {
    
    static toDomain(data:Prisma.JobOppeningGetPayload<{}>){
        const { createdAt,department,description,id,requirements,responsabilities,slug,title } = data
        return JobOppening.create({
            title,
            slug:slug ?? undefined,
            department,
            description: description ?? undefined,
            requirements,
            responsabilities,
            createdAt,
        }, id,)
    }

    static toPersistence(data:JobOppening):Prisma.JobOppeningCreateInput{
        const { department, requirements, responsabilities, title, description,slug } = data.toJSON()
        return {
            title,
            slug: slug ?? undefined,
            department,
            description: description ?? undefined,
            requirements,
            responsabilities,
        }

    }
}