import { PaginationParams } from "../../../../../core/@types/pagination-params";
import { PartnerJobOppeningProps } from "../../../enterprise/entities/partner-job-oppening";
import { IPartnerJobOppeningRepository } from "../../interfaces/partner-job-oppening.repository";

export type FetchManyPartnerJobOppeningsResponse = {
  totalPages: number;
  totalRecords: number;
  data: PartnerJobOppeningProps[];
};

export class FetchManyPartnerJobOppeningsUseCase {
  constructor(private repository: IPartnerJobOppeningRepository) {}

  async execute({ limit, page = 1, slug }: PaginationParams): Promise<FetchManyPartnerJobOppeningsResponse> {
    const isPaginated = typeof limit === "number" && limit > 0;

    if (!isPaginated) {
      const partnerJobOppening = await this.repository.fetchMany({ slug });

      return {
        totalPages: 1,
        totalRecords: partnerJobOppening.length,
        data: partnerJobOppening.map((job) => job.toJSON()),
      };
    }
    
    const offset = (page - 1) * limit;

    const [partnerJobOppening, totalRecords] = await Promise.all([
      await this.repository.fetchMany({
        page: offset,
        limit,
        slug
      }),
      await this.repository.countAll({page:offset, limit, slug}),
    ]);

    const totalPages = Math.ceil(totalRecords / limit);

    return {
      data: partnerJobOppening,
      totalPages,
      totalRecords,
    };
  }
}
