import { PaginationParams } from "../../../../../core/@types/pagination-params";
import { JobOppeningProps } from "../../../enterprise/entities/job-oppening";
import { IJobOppeningRepository } from "../../interfaces/job-oppening.repository";

export type FetchManyJobOppeningsResponse = {
  totalPages: number;
  totalRecords: number;
  data: JobOppeningProps[];
};

export class FetchManyJobOppeningsUseCase {
  constructor(private repository: IJobOppeningRepository) {}

  async execute({ limit, page = 1, slug }: PaginationParams): Promise<FetchManyJobOppeningsResponse> {
    const isPaginated = typeof limit === "number" && limit > 0;

    if (!isPaginated) {
      const jobOppenings = await this.repository.fetchMany({ slug });

      return {
        totalPages: 1,
        totalRecords: jobOppenings.length,
        data: jobOppenings.map((job) => job.toJSON()),
      };
    }

    const offset = (page - 1) * limit;

    const [jobOppenings, totalRecords] = await Promise.all([
      await this.repository.fetchMany({
        page: offset,
        limit,
        slug
      }),
      await this.repository.countAll({ page:offset, limit, slug  }),
    ]);

    const totalPages = Math.ceil(totalRecords / limit);

    return {
      data: jobOppenings,
      totalPages,
      totalRecords,
    };
  }
}
