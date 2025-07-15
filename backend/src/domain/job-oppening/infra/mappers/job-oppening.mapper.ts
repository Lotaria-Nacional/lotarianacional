import { Prisma } from "@prisma/client";
import { JobOppening } from "../../enterprise/entities/job-oppening";

export class JobOppeningMapper {
  static toDomain(data: Prisma.JobOppeningGetPayload<any>) {
    const { createdAt, department, quantity, id, requirements, slug, title } = data;

    return JobOppening.create(
      {
        title,
        quantity,
        slug: slug ?? undefined,
        department,
        requirements,
        createdAt,
      },
      id
    );
  }

  static toPersistence(data: JobOppening): Prisma.JobOppeningCreateInput {
    const { department, requirements, responsabilities, quantity, title, description, slug } = data.toJSON();
    return {
      title,
      quantity,
      slug: slug ?? undefined,
      department,
      description: description ?? undefined,
      requirements,
      responsabilities,
    };
  }
}
