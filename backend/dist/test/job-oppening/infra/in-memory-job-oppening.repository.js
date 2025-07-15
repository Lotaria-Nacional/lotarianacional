"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryJobOppeningRepository = void 0;
class InMemoryJobOppeningRepository {
    items = [];
    async create(jobOppening) {
        this.items.push(jobOppening);
    }
    async save(jobOppening) {
        const jobIndex = this.items.findIndex(job => job.id === jobOppening.id);
        if (jobIndex === -1) {
            throw new Error(`JobOppening with ID ${jobOppening.id} not found`);
        }
        this.items[jobIndex] = jobOppening;
    }
    async delete(id) {
        const jobIndex = this.items.findIndex(job => job.id === id);
        this.items.splice(jobIndex, 1);
    }
    async fetchMany(params) {
        if (params?.limit !== undefined && params?.page !== undefined) {
            const end = params.page + params.limit;
            return this.items.slice(params.page, end);
        }
        return this.items;
    }
    async getById(id) {
        return this.items.find((job) => job.id === id) ?? null;
    }
    async countAll() {
        return this.items.length;
    }
}
exports.InMemoryJobOppeningRepository = InMemoryJobOppeningRepository;
//# sourceMappingURL=in-memory-job-oppening.repository.js.map