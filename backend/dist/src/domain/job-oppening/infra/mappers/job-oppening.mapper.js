"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobOppeningMapper = void 0;
const job_oppening_1 = require("../../enterprise/entities/job-oppening");
class JobOppeningMapper {
    static toDomain(data) {
        const { createdAt, department, quantity, id, requirements, slug, title } = data;
        return job_oppening_1.JobOppening.create({
            title,
            quantity,
            slug: slug ?? undefined,
            department,
            requirements,
            createdAt,
        }, id);
    }
    static toPersistence(data) {
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
exports.JobOppeningMapper = JobOppeningMapper;
//# sourceMappingURL=job-oppening.mapper.js.map