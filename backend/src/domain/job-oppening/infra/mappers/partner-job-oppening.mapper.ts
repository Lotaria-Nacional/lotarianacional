import { Prisma } from "@prisma/client";
import { PartnerJobOppening } from "../../enterprise/entities/partner-job-oppening";

export class PartnerJobOppeningMapper {
  static toDomain(data: Prisma.PartnerjobOppeningGetPayload<any>) {
    const { createdAt, type, location, quantity, id, requirements, slug, title } = data;

    return PartnerJobOppening.create(
      {
        title,
        quantity,
        slug: slug ?? undefined,
        type,
        location,
        requirements,
        createdAt,
      },
      id
    );
  }

  static toPersistence(data: PartnerJobOppening): Prisma.PartnerjobOppeningCreateInput {
    const { type, location, requirements, responsabilities, quantity, title, description, slug } = data.toJSON();
    return {
      title,
      quantity,
      slug: slug ?? undefined,
      type,
      location,
      description: description ?? undefined,
      requirements,
      responsabilities,
    };
  }
}
