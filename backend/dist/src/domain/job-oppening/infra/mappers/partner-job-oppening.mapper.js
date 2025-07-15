"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnerJobOppeningMapper = void 0;
const partner_job_oppening_1 = require("../../enterprise/entities/partner-job-oppening");
class PartnerJobOppeningMapper {
    static toDomain(data) {
        const { createdAt, type, location, quantity, id, requirements, slug, title } = data;
        return partner_job_oppening_1.PartnerJobOppening.create({
            title,
            quantity,
            slug: slug ?? undefined,
            type,
            location,
            requirements,
            createdAt,
        }, id);
    }
    static toPersistence(data) {
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
exports.PartnerJobOppeningMapper = PartnerJobOppeningMapper;
//# sourceMappingURL=partner-job-oppening.mapper.js.map