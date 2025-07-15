"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManyPartnerJobOppeningsUseCase = void 0;
class FetchManyPartnerJobOppeningsUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute({ limit, page = 1, slug }) {
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
            await this.repository.countAll({ page: offset, limit, slug }),
        ]);
        const totalPages = Math.ceil(totalRecords / limit);
        return {
            data: partnerJobOppening,
            totalPages,
            totalRecords,
        };
    }
}
exports.FetchManyPartnerJobOppeningsUseCase = FetchManyPartnerJobOppeningsUseCase;
//# sourceMappingURL=fetch-many-partner-job-oppenings.useCase.js.map