"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManyJobOppeningsUseCase = void 0;
class FetchManyJobOppeningsUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute({ limit, page = 1, slug }) {
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
            await this.repository.countAll({ page: offset, limit, slug }),
        ]);
        const totalPages = Math.ceil(totalRecords / limit);
        return {
            data: jobOppenings,
            totalPages,
            totalRecords,
        };
    }
}
exports.FetchManyJobOppeningsUseCase = FetchManyJobOppeningsUseCase;
//# sourceMappingURL=fetch-many-job-oppenings.useCase.js.map